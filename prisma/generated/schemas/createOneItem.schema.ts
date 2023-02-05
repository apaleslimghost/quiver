import { z } from 'zod';
import { ItemCreateInputObjectSchema } from './objects/ItemCreateInput.schema';
import { ItemUncheckedCreateInputObjectSchema } from './objects/ItemUncheckedCreateInput.schema';

export const ItemCreateOneSchema = z.object({
  data: z.union([
    ItemCreateInputObjectSchema,
    ItemUncheckedCreateInputObjectSchema,
  ]),
});
