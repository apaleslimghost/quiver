import { z } from 'zod';
import { ItemScalarWhereInputObjectSchema } from './ItemScalarWhereInput.schema';
import { ItemUpdateManyMutationInputObjectSchema } from './ItemUpdateManyMutationInput.schema';
import { ItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from './ItemUncheckedUpdateManyWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateManyWithWhereWithoutLocationInput> = z
  .object({
    where: z.lazy(() => ItemScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ItemUpdateManyMutationInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateManyWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpdateManyWithWhereWithoutLocationInputObjectSchema = Schema;
