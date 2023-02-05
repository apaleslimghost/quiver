import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';

export const ItemDeleteOneSchema = z.object({
  where: ItemWhereUniqueInputObjectSchema,
});
