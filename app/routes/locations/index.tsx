import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { LocationCard } from "~/components/location/card";
import db from '~/lib/db.server'
import url from "~/lib/url";
import { LocationFormSchema } from "./new";

export async function loader() {
  const locations = await db.location.findMany()

  return json({locations})
}

export default function Index() {
  const {locations} = useLoaderData<typeof loader>()
  const newLocation = useFetcher()

  return (
    <ul>
      {locations.map(
        location => <li key={location.id}>
          <LocationCard location={location} />
        </li>
      )}
      {newLocation.submission && <li>
			<LocationCard location={LocationFormSchema.parse(Object.fromEntries(newLocation.submission.formData))} />
      </li>}
      <li>
        <newLocation.Form method="post" action={url('item', 'new')}>
          <input name="name" placeholder="name" required />
          <input name="description" placeholder="description" required />
          <input type="hidden" name="submitInline" value="true" />
          <input type="submit" onClick={event => {
            event.preventDefault()
            if(event.target instanceof HTMLInputElement) {
              newLocation.submit(event.target.form)
            }
          }} />
        </newLocation.Form>
      </li>
    </ul>
  );
}
