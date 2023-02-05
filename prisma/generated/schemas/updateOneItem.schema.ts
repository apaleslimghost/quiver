import { z } from 'zod';
import { ItemUpdateInputObjectSchema } from './objects/ItemUpdateInput.schema';
import { ItemUncheckedUpdateInputObjectSchema } from './objects/ItemUncheckedUpdateInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';

export const ItemUpdateOneSchema = z.object({
  data: z.union([
    ItemUpdateInputObjectSchema,
    ItemUncheckedUpdateInputObjectSchema,
  ]),
  where: ItemWhereUniqueInputObjectSchema,
});
