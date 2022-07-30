import { customAlphabet } from 'nanoid';

export const genSeriName = (
  nameBase: string,
  nameSet: Set<string> | string[],
) => {
  const set = new Set(nameSet);
  let seed = 1;
  let name = nameBase + seed;
  while (set.has(name)) {
    seed++;
    name = nameBase + seed;
  }
  return name;
};

// 纯粹的 nanoid 会带有 - _ 等字符可能带来问题
const alphabet = '1234567890qwertyuiopasdfghjklzxcvbnm';
export const randomId = customAlphabet(alphabet, 15);

export const swap = (array: unknown[], i1: number, i2: number) => {
  const item = array[i1];
  array[i1] = array[i2];
  array[i2] = item;
  return array;
};
