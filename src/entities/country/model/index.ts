import countrySchema, {
  type Country,
} from "@/shared/api/content/schemas/country.schema";
import countryListSchema, {
  type CountryList,
} from "@/shared/api/content/schemas/countryList.schema";
import { COUNTRY_DIR, COUNTRY_FILE, COUNTRY_LIST_FILE } from "../constants";
import { DataReader } from "@/shared/api/content/lib/dataReader";

export const countryReader = new DataReader<Country>({
  dirPath: COUNTRY_DIR,
  fileName: COUNTRY_FILE,
  schema: countrySchema,
});

export const countryListReader = new DataReader<CountryList>({
  dirPath: COUNTRY_DIR,
  fileName: COUNTRY_LIST_FILE,
  schema: countryListSchema,
});
