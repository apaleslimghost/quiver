import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { ItemLink } from "~/components/item/link";
import db from '~/lib/db.server'
import url from "~/lib/url";
import { ItemFormSchema } from "./new";

export async function loader() {
  const [items, locations] = await Promise.all([
    db.item.findMany(),
    db.location.findMany()
  ])

  return json({items, locations})
}

export default function Index() {
  const {items, locations} = useLoaderData<typeof loader>()
  const newItem = useFetcher()

  return (
    <ul>
      {items.map(
        item => <li key={item.id}>
          <ItemLink item={item} />
        </li>
      )}
      {newItem.submission && <li>
        <ItemLink item={ItemFormSchema.parse(Object.fromEntries(newItem.submission.formData))} />
      </li>}
      <li>
        <newItem.Form method="post" action={url('item', 'new')}>
          <input name="name" placeholder="name" required />
          <input name="description" placeholder="description" required />
          <select name="locationId" defaultValue={undefined}>
            <option disabled value={undefined}>Location...</option>
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
  );
}
