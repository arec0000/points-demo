import { ParsingError, ValidationError } from "@/shared/lib/errors";
import * as Yaml from "yaml";
import Ajv from "ajv";

const ajv = new Ajv();

export async function parseContent<T>(
  text: string,
  schema?: object,
): Promise<T> {
  try {
    const res = await Yaml.parse(text);

    if (!schema) {
      return res;
    }

    if (await ajv.validate(schema, res)) {
      return res;
    } else {
      throw new ValidationError(ajv.errors ?? []);
    }
  } catch (err) {
    throw new ParsingError(text, "Content parsing error", err);
  }
}
