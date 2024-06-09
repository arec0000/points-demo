import { privateConfig } from "@/shared/config/private";
import path from "path";
import { readDataFile } from "./readFile";
import { parseContent } from "./parseContent";

import { type NestedFilesInfo, NestedFilesReader } from "./getWithFilesData";

export class DataReader<T> {
  nestedFilesReader: NestedFilesReader<T> | undefined;

  constructor(
    private options: {
      dirPath: string;
      fileName: string;
      schema: any;
      basePath?: string;
      nestedFiles?: NestedFilesInfo;
    },
  ) {
    this.nestedFilesReader =
      options.nestedFiles &&
      new NestedFilesReader({
        basePath: options.basePath ?? privateConfig.CONTENT_PATH,
        dirPath: options.dirPath,
        nestedFilesInfo: options.nestedFiles,
      });
  }

  get = async (slug = "") => {
    const {
      dirPath,
      fileName,
      schema,
      basePath = privateConfig.CONTENT_PATH,
    } = this.options;

    try {
      const text = await readDataFile(
        path.join(basePath, dirPath, slug, fileName),
      );

      const content = await parseContent<T>(text, schema);

      if (!this.nestedFilesReader) {
        return content;
      }

      return this.nestedFilesReader.parse(slug, content);
    } catch (err) {
      console.error(err);
      return undefined;
    }
  };

  getList = async (slugs: string[]) => {
    const data = await Promise.all(slugs.map(this.get));

    const res: (T & { slug: string })[] = [];

    data.forEach((item, i) => {
      if (item) {
        res.push({ ...item, slug: slugs[i] });
      }
    });

    return res;
  };
}
