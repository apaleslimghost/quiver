import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';
import { ItemCreateInputObjectSchema } from './objects/ItemCreateInput.schema';
import { ItemUncheckedCreateInputObjectSchema } from './objects/ItemUncheckedCreateInput.schema';
import { ItemUpdateInputObjectSchema } from './objects/ItemUpdateInput.schema';
import { ItemUncheckedUpdateInputObjectSchema } from './objects/ItemUncheckedUpdateInput.schema';

export const ItemUpsertSchema = z.object({
  where: ItemWhereUniqueInputObjectSchema,
  create: z.union([
    ItemCreateInputObjectSchema,
    ItemUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ItemUpdateInputObjectSchema,
    ItemUncheckedUpdateInputObjectSchema,
  ]),
});
