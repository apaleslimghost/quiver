import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LocationUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateInput> = z
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
    location: z
      .lazy(() => LocationUpdateOneRequiredWithoutItemsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemUpdateInputObjectSchema = Schema;
