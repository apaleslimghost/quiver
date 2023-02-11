import { z } from 'zod';
import { LocationCreateManyInputObjectSchema } from './objects/LocationCreateManyInput.schema';

export const LocationCreateManySchema = z.object({
  data: z.union([
    LocationCreateManyInputObjectSchema,
    z.array(LocationCreateManyInputObjectSchema),
  ]),
});
