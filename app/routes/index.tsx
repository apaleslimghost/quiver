import { Item } from "@prisma/client";
import { ActionArgs, json } from "@remix-run/node";
import { Form, Link, useLoaderData, useNavigation } from "@remix-run/react";
import { ItemCreateOneSchema } from "prisma/generated/schemas";
import db from '~/db.server'
import url from "~/url";
import { z } from "zod";

export async function loader() {
  const [items, locations] = await Promise.all([
    db.item.findMany(),
    db.location.findMany()
  ])

  return json({items, locations})
}

const ItemFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  locationId: z.coerce.number()
})

export async function action({ request }: ActionArgs) {
  const form = await request.formData()
  const {locationId, ...data} = ItemFormSchema.parse(Object.fromEntries(form))

  await db.item.create({
    data: {
      ...data,
      location: {
        connect: {
          id: locationId
        }
      }
    }
  })

  return null
}

const ItemView = (item: Item) =>  (
  <li>
    {!Number.isNaN(item.id) ? <Link to={url('item', item)}>{item.name}</Link> : item.name}
  </li>
)

export default function Index() {
  const {items, locations} = useLoaderData<typeof loader>()
  const navigation = useNavigation()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ul>
        {items.map(
          item => <ItemView key={item.id} {...item} />
        )}
        {navigation.formData && <ItemView {...ItemFormSchema.parse(Object.fromEntries(navigation.formData))} id={NaN} />}
        <li>
          <Form method="post">
            <input name="name" placeholder="name" required />
            <input name="description" placeholder="description" required />
            <select name="locationId">
              <option disabled selected>Location...</option>
              {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
            </select>
            <input type="submit" />
          </Form>
        </li>
      </ul>
    </div>
  );
}
