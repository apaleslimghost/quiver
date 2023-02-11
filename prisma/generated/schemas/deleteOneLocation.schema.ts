import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';

export const LocationDeleteOneSchema = z.object({
  where: LocationWhereUniqueInputObjectSchema,
});
