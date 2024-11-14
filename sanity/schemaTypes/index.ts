import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { author } from '@/sanity/schemaTypes/author'
import { startup } from '@/sanity/schemaTypes/startup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, blockContentType, categoryType, postType, authorType],
}
