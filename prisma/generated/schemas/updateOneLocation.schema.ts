import { z } from 'zod';
import { LocationUpdateInputObjectSchema } from './objects/LocationUpdateInput.schema';
import { LocationUncheckedUpdateInputObjectSchema } from './objects/LocationUncheckedUpdateInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';

export const LocationUpdateOneSchema = z.object({
  data: z.union([
    LocationUpdateInputObjectSchema,
    LocationUncheckedUpdateInputObjectSchema,
  ]),
  where: LocationWhereUniqueInputObjectSchema,
});
