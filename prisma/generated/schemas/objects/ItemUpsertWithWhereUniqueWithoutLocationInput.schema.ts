import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutLocationInputObjectSchema } from './ItemUpdateWithoutLocationInput.schema';
import { ItemUncheckedUpdateWithoutLocationInputObjectSchema } from './ItemUncheckedUpdateWithoutLocationInput.schema';
import { ItemCreateWithoutLocationInputObjectSchema } from './ItemCreateWithoutLocationInput.schema';
import { ItemUncheckedCreateWithoutLocationInputObjectSchema } from './ItemUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemUpsertWithWhereUniqueWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ItemUpdateWithoutLocationInputObjectSchema),
        z.lazy(() => ItemUncheckedUpdateWithoutLocationInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ItemCreateWithoutLocationInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutLocationInputObjectSchema),
      ]),
    })
    .strict();

export const ItemUpsertWithWhereUniqueWithoutLocationInputObjectSchema = Schema;
