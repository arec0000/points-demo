import fs from "fs";
import util from "util";

const readFile = util.promisify(fs.readFile);

export async function readDataFile(path: string) {
  return readFile(path, { encoding: "utf8" });
}
