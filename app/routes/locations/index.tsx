import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { LocationCard } from "~/components/location/card";
import db from '~/lib/db.server'
import url from "~/lib/url";
import { LocationFormSchema } from "./new";

import * as container from '../../components/layout/container.css'
import * as card from '../../components/item/card.css'
import grid from '../../components/layout/grid.css'
import { Heading } from "~/components/typography/heading";

export async function loader() {
  const locations = await db.location.findMany()

  return json({locations})
}

export default function Index() {
  const {locations} = useLoaderData<typeof loader>()
  const newLocation = useFetcher()

  return <div className={container.area.content}>
    <Heading level={1}>
      All locations
    </Heading>
		<div className={grid}>
      {locations.map(
        location =>
          <LocationCard key={location.id} location={location} />
      )}
      {newLocation.submission &&
        <LocationCard location={LocationFormSchema.parse(Object.fromEntries(newLocation.submission.formData))} />
      }
      <div className={card.card}>
        <newLocation.Form method="post" action={url('location', 'new')}>
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
      </div>
    </div>
  </div>;
}
