import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ItemUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from './ItemUncheckedUpdateManyWithoutLocationNestedInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { LocationUncheckedUpdateManyWithoutParentNestedInputObjectSchema } from './LocationUncheckedUpdateManyWithoutParentNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
      .lazy(() => ItemUncheckedUpdateManyWithoutLocationNestedInputObjectSchema)
      .optional(),
    parentId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    children: z
      .lazy(
        () => LocationUncheckedUpdateManyWithoutParentNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const LocationUncheckedUpdateInputObjectSchema = Schema;
