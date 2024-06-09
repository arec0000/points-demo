import path from "path";
import { readDataFile } from "../readFile";

const PARSERS = {
  json: (data) => JSON.parse(data),
};

export class NestedFilesReader {
  constructor({ basePath, dirPath, nestedFilesInfo }) {
    this.basePath = basePath;
    this.dirPath = dirPath;
    this.nestedFilesInfo = nestedFilesInfo;
  }

  async parse(slug, data) {
    if (!data || typeof data !== "object") {
      return data;
    }

    if (Array.isArray(data)) {
      return Promise.all(data.map((item) => this.parse(slug, item)));
    }

    const processed = {};

    await Promise.all(
      Object.entries(data).map(async ([key, value]) => {
        const filesInfo = this.nestedFilesInfo[key];

        if (!filesInfo) {
          processed[key] = await this.parse(slug, value);
          return;
        }

        const fileData = await readDataFile(
          path.join(this.basePath, this.dirPath, addExt(value, filesInfo.ext)),
        );

        const parser = PARSERS[filesInfo.type];

        if (parser) {
          processed[key] = parser(fileData);
        } else {
          processed[key] = fileData;
        }
      }),
    );

    return processed;
  }
}

const addExt = (name, ext) => (name.endsWith(ext) ? name : name + ext);
