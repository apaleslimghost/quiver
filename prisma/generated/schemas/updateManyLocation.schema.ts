import { z } from 'zod';
import { LocationUpdateManyMutationInputObjectSchema } from './objects/LocationUpdateManyMutationInput.schema';
import { LocationWhereInputObjectSchema } from './objects/LocationWhereInput.schema';

export const LocationUpdateManySchema = z.object({
  data: LocationUpdateManyMutationInputObjectSchema,
  where: LocationWhereInputObjectSchema.optional(),
});
