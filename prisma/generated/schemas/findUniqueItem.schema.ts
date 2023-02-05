import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';

export const ItemFindUniqueSchema = z.object({
  where: ItemWhereUniqueInputObjectSchema,
});
