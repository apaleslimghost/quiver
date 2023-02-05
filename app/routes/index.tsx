import { PrismaClient } from "@prisma/client";
import { ActionArgs, json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { ItemCreateOneSchema } from "prisma/generated/schemas";

const db = new PrismaClient()

export async function loader() {
  const items = await db.item.findMany()
  return json(items)
}

export async function action({ request }: ActionArgs) {
  const form = await request.formData()
  const data = ItemCreateOneSchema.parse({ data: Object.fromEntries(form) })
  await db.item.create(data)

  return null
}

export default function Index() {
  const items = useLoaderData<typeof loader>()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ul>
        {items.map(
          item => <li key={item.id}>{item.name} {item.description}</li>
        )}
        <li>
          <Form method="post">
            <input name="name" placeholder="name" required />
            <input name="description" placeholder="description" required />
            <input type="submit" />
          </Form>
        </li>
      </ul>
    </div>
  );
}
