import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ItemUpdateManyWithoutLocationNestedInputObjectSchema } from './ItemUpdateManyWithoutLocationNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateInput> = z
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
  })
  .strict();

export const LocationUpdateInputObjectSchema = Schema;
