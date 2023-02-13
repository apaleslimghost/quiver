import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ItemUpdateManyWithoutLocationNestedInputObjectSchema } from './ItemUpdateManyWithoutLocationNestedInput.schema';
import { LocationUpdateManyWithoutParentNestedInputObjectSchema } from './LocationUpdateManyWithoutParentNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateWithoutParentInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    items: z
      .lazy(() => ItemUpdateManyWithoutLocationNestedInputObjectSchema)
      .optional(),
    children: z
      .lazy(() => LocationUpdateManyWithoutParentNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationUpdateWithoutParentInputObjectSchema = Schema;
