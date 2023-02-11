import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';

export const LocationFindUniqueSchema = z.object({
  where: LocationWhereUniqueInputObjectSchema,
});
