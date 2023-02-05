import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const db = new PrismaClient()

export async function loader() {
  const items = await db.item.findMany()
  return json(items)
}

export default function Index() {
  const items = useLoaderData<typeof loader>()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ul>
        {items.map(
          item => <li key={item.id}>{item.name}</li>
        )}
      </ul>
    </div>
  );
}
