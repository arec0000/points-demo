import storiesListSchema, {
  type StoriesList,
} from "@/shared/api/content/schemas/storiesList.schema";

import { DataReader } from "@/shared/api/content/lib/dataReader";

import { STORIES_DIR, STORIES_FILE } from "../constants";

export const storiesReader = new DataReader<StoriesList>({
  dirPath: STORIES_DIR,
  fileName: STORIES_FILE,
  schema: storiesListSchema,
});
