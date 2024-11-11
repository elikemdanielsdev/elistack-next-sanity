import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "@/sanity/schemaTypes/documents/blockContentType";
import { categoryType } from "@/sanity/schemaTypes/documents/categoryType";
import { postType } from "@/sanity/schemaTypes/documents/postType";
import { authorType } from "@/sanity/schemaTypes/documents/authorType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType],
};
