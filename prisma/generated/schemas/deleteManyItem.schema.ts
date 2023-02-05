import { z } from 'zod';
import { ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';

export const ItemDeleteManySchema = z.object({
  where: ItemWhereInputObjectSchema.optional(),
});
