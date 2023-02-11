import { z } from 'zod';
import { LocationCreateInputObjectSchema } from './objects/LocationCreateInput.schema';
import { LocationUncheckedCreateInputObjectSchema } from './objects/LocationUncheckedCreateInput.schema';

export const LocationCreateOneSchema = z.object({
  data: z.union([
    LocationCreateInputObjectSchema,
    LocationUncheckedCreateInputObjectSchema,
  ]),
});
