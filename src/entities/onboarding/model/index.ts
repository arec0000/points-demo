import onboardingSchema, {
  type Onboarding,
} from "@/shared/api/content/schemas/onboarding.schema";
import { ONBOARDING_DIR, ONBOARDING_FILE } from "../constants";
import { DataReader } from "@/shared/api/content/lib/dataReader";
import { WithNestedFiles } from "@/shared/api/content/lib/getWithFilesData";

export const onboardingReader = new DataReader<
  WithNestedFiles<Onboarding, "schema">
>({
  dirPath: ONBOARDING_DIR,
  fileName: ONBOARDING_FILE,
  schema: onboardingSchema,
  nestedFiles: { schema: { ext: ".json", type: "json" } },
});
