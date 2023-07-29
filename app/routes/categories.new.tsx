import { type ActionArgs, redirect } from '@remix-run/node'
import { z } from 'zod'

import dbServer from '~/lib/db.server'
import url from '~/lib/url'

const CategoryFormSchema = z.object({
	name: z.string(),
	parentId: z.coerce.number().optional(),
})

export async function action({ request }: ActionArgs) {
	const form = Object.fromEntries(await request.formData())

	const { parentId, ...data } = CategoryFormSchema.parse(form)

	const category = await dbServer.category.create({
		data: {
			...data,
			...(parentId
				? {
						parent: {
							connect: { id: parentId },
						},
				  }
				: {}),
		},
	})

	return redirect(url('category', category))
}
