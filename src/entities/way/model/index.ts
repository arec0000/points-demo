import waySchema, { type Way } from "@/shared/api/content/schemas/way.schema";

import { DataReader } from "@/shared/api/content/lib/dataReader";

import { WAY_DIR, WAY_FILE } from "../constants";

export const wayReader = new DataReader<Way>({
  dirPath: WAY_DIR,
  fileName: WAY_FILE,
  schema: waySchema,
});
