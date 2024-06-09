import { blocks } from "./blocks";
import type { BlockData, BlockType } from "./types";

export function renderContentBlock<T extends BlockType>(
  type: T,
  data: BlockData<T>,
) {
  return blocks[type](data);
}
