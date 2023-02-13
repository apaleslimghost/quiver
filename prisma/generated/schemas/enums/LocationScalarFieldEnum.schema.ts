import { z } from 'zod';

export const LocationScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'parentId',
]);
