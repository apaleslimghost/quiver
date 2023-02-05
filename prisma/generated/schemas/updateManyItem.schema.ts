import { z } from 'zod';
import { ItemUpdateManyMutationInputObjectSchema } from './objects/ItemUpdateManyMutationInput.schema';
import { ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';

export const ItemUpdateManySchema = z.object({
  data: ItemUpdateManyMutationInputObjectSchema,
  where: ItemWhereInputObjectSchema.optional(),
});
