import { z } from 'zod';
import { LocationOrderByWithRelationInputObjectSchema } from './objects/LocationOrderByWithRelationInput.schema';
import { LocationWhereInputObjectSchema } from './objects/LocationWhereInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';
import { LocationScalarFieldEnumSchema } from './enums/LocationScalarFieldEnum.schema';

export const LocationFindManySchema = z.object({
  orderBy: z
    .union([
      LocationOrderByWithRelationInputObjectSchema,
      LocationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LocationWhereInputObjectSchema.optional(),
  cursor: LocationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(LocationScalarFieldEnumSchema).optional(),
});
