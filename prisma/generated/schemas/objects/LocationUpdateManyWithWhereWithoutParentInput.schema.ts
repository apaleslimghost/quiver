import { z } from 'zod';
import { LocationScalarWhereInputObjectSchema } from './LocationScalarWhereInput.schema';
import { LocationUpdateManyMutationInputObjectSchema } from './LocationUpdateManyMutationInput.schema';
import { LocationUncheckedUpdateManyWithoutChildrenInputObjectSchema } from './LocationUncheckedUpdateManyWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateManyWithWhereWithoutParentInput> =
  z
    .object({
      where: z.lazy(() => LocationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => LocationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => LocationUncheckedUpdateManyWithoutChildrenInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LocationUpdateManyWithWhereWithoutParentInputObjectSchema = Schema;
