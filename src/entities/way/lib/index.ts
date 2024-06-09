export function sliceInfo(
  info: {
    label: string;
    value?: string;
    cols?: 1 | 2;
    lines?: number;
    topImage?: { src: string; alt: string };
    leftImage?: { src: string; alt: string };
  }[],
) {
  const res = [];

  let count = 0;

  for (let i = 0; i < info.length; i += 1) {
    const item = info[i];

    if (count === 3 && item.cols === 2) {
      continue;
    }

    res.push(item);

    count += item.cols ?? 1;

    if (count >= 4) {
      break;
    }
  }

  return res;
}
