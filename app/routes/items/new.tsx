import { ActionArgs, redirect } from '@remix-run/node'
import db from '~/lib/db.server'
import { z } from 'zod'
import url from '~/lib/url'

export const ItemFormSchema = z.object({
	name: z.string(),
	description: z.string(),
	locationId: z.coerce.number(),
	submitInline: z.coerce.boolean().default(false),
})

export async function action({ request }: ActionArgs) {
	const form = await request.formData()
	const { locationId, submitInline, ...data } = ItemFormSchema.parse(
		Object.fromEntries(form),
	)

	const item = await db.item.create({
		data: {
			...data,
			locations: {
				create: {
					locationId,
				},
			},
		},
	})

	if (submitInline) {
		return null
	} else {
		return redirect(url('item', item))
	}
}
