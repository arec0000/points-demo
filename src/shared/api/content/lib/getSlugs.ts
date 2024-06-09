import nodePath from "path";
import fs from "fs";
import { privateConfig } from "@/shared/config/private";

export async function getSlugs(
  path: string,
  base = privateConfig.CONTENT_PATH,
) {
  return new Promise<string[]>((res, rej) => {
    fs.readdir(nodePath.join(base, path), (err, files) => {
      if (err) {
        console.error(err);
        rej(err);
      } else {
        res(files.filter((file) => !file.endsWith(".yaml")));
      }
    });
  });
}
