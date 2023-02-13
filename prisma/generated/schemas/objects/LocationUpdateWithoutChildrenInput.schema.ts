import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ItemUpdateManyWithoutLocationNestedInputObjectSchema } from './ItemUpdateManyWithoutLocationNestedInput.schema';
import { LocationUpdateOneWithoutChildrenNestedInputObjectSchema } from './LocationUpdateOneWithoutChildrenNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateWithoutChildrenInput> = z
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
    parent: z
      .lazy(() => LocationUpdateOneWithoutChildrenNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationUpdateWithoutChildrenInputObjectSchema = Schema;
