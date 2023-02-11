import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutLocationInputObjectSchema } from './ItemUpdateWithoutLocationInput.schema';
import { ItemUncheckedUpdateWithoutLocationInputObjectSchema } from './ItemUncheckedUpdateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpdateWithWhereUniqueWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ItemUpdateWithoutLocationInputObjectSchema),
        z.lazy(() => ItemUncheckedUpdateWithoutLocationInputObjectSchema),
      ]),
    })
    .strict();

export const ItemUpdateWithWhereUniqueWithoutLocationInputObjectSchema = Schema;
