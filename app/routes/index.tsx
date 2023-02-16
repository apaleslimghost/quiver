import { Item } from "@prisma/client";
import { json } from "@remix-run/node";
import { Form, Link, useFetcher, useLoaderData, useNavigation } from "@remix-run/react";
import db from '~/lib/db.server'
import url from "~/lib/url";
import { ItemFormSchema } from "./items/new";

export async function loader() {
  const [items, locations] = await Promise.all([
    db.item.findMany(),
    db.location.findMany()
  ])

  return json({items, locations})
}

const ItemView = (item: Item) =>  (
  <li>
    {!Number.isNaN(item.id) ? <Link to={url('item', item)}>{item.name}</Link> : item.name}
  </li>
)

export default function Index() {
  const {items, locations} = useLoaderData<typeof loader>()
  const navigation = useNavigation()
  const newItem = useFetcher()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ul>
        {items.map(
          item => <ItemView key={item.id} {...item} />
        )}
        {navigation.formData && <ItemView {...ItemFormSchema.parse(Object.fromEntries(navigation.formData))} id={NaN} />}
        <li>
          <newItem.Form method="post" action={url('item', 'new')}>
            <input name="name" placeholder="name" required />
            <input name="description" placeholder="description" required />
            <select name="locationId">
              <option disabled selected>Location...</option>
              {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
            </select>
            <input type="hidden" name="submitInline" value="true" />
            <input type="submit" onClick={event => {
              event.preventDefault()
              if(event.target instanceof HTMLInputElement) {
                newItem.submit(event.target.form)
              }
            }} />
          </newItem.Form>
        </li>
      </ul>
    </div>
  );
}
