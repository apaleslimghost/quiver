import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutLocationInputObjectSchema } from './ItemCreateWithoutLocationInput.schema';
import { ItemUncheckedCreateWithoutLocationInputObjectSchema } from './ItemUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutLocationInput> = z
  .object({
    where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCreateWithoutLocationInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const ItemCreateOrConnectWithoutLocationInputObjectSchema = Schema;
