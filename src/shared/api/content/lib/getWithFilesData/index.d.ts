type DeepReplace<T extends unknown, Key extends string, NewT> = T extends object
  ? {
      [K in keyof T]: K extends Key ? NewT : DeepReplace<T[K], Key, NewT>;
    }
  : T;

type Extension = string;
type FileType = "json";

export type NestedFilesInfo<K extends string = string> = Record<
  K,
  { ext: Extension; type: FileType }
>;

export type WithNestedFiles<T extends unknown, K extends string> = DeepReplace<
  T,
  K,
  any
>;

declare class NestedFilesReader<T> {
  constructor(options: {
    basePath: string;
    dirPath: string;
    nestedFilesInfo: NestedFilesInfo;
  }) {}

  parse(slug: string, data: unknown): Promise<T>;
}
