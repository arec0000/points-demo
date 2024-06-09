import questSchema, {
  type Quest,
} from "@/shared/api/content/schemas/quest.schema";
import subquestSchema, {
  type Subquest,
} from "@/shared/api/content/schemas/subquest.schema";
import taskSchema, {
  type Task,
} from "@/shared/api/content/schemas/task.schema";

import { DataReader } from "@/shared/api/content/lib/dataReader";

import {
  QUEST_ROOT_DIR,
  QUEST_DIR,
  QUEST_FILE,
  SUBQUEST_DIR,
  SUBQUEST_FILE,
  TASK_DIR,
  TASK_FILE,
} from "../constants";

export const questReader = new DataReader<Quest>({
  dirPath: `${QUEST_ROOT_DIR}/${QUEST_DIR}`,
  fileName: QUEST_FILE,
  schema: questSchema,
});

export const subquestReader = new DataReader<Subquest>({
  dirPath: `${QUEST_ROOT_DIR}/${SUBQUEST_DIR}`,
  fileName: SUBQUEST_FILE,
  schema: subquestSchema,
});

export const taskReader = new DataReader<Task>({
  dirPath: `${QUEST_ROOT_DIR}/${TASK_DIR}`,
  fileName: TASK_FILE,
  schema: taskSchema,
});
