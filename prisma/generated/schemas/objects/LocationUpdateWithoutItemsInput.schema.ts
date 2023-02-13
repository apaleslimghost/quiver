import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LocationUpdateOneWithoutChildrenNestedInputObjectSchema } from './LocationUpdateOneWithoutChildrenNestedInput.schema';
import { LocationUpdateManyWithoutParentNestedInputObjectSchema } from './LocationUpdateManyWithoutParentNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateWithoutItemsInput> = z
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
    parent: z
      .lazy(() => LocationUpdateOneWithoutChildrenNestedInputObjectSchema)
      .optional(),
    children: z
      .lazy(() => LocationUpdateManyWithoutParentNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationUpdateWithoutItemsInputObjectSchema = Schema;
