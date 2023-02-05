import { z } from 'zod';
import { ItemCreateManyInputObjectSchema } from './objects/ItemCreateManyInput.schema';

export const ItemCreateManySchema = z.object({
  data: z.union([
    ItemCreateManyInputObjectSchema,
    z.array(ItemCreateManyInputObjectSchema),
  ]),
});
