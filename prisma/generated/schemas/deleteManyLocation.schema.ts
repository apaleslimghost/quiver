import { z } from 'zod';
import { LocationWhereInputObjectSchema } from './objects/LocationWhereInput.schema';

export const LocationDeleteManySchema = z.object({
  where: LocationWhereInputObjectSchema.optional(),
});
