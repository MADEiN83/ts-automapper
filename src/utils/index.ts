import AutoMapper from "../core/AutoMapper";

export const getKeysFromPredicate = (
  predicate?: (object: any) => any
): string[] => {
  if (!predicate) return [];

  const regex = /(\.\w+)/g;
  let keys = [];
  let m;

  while ((m = regex.exec(predicate.toString())) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    keys.push(m[0].replace(".", ""));
  }

  return keys;
};

export const convert = (
  data: any = null,
  type: string | null = AutoMapper.TYPES.STRING
): any => {
  if (!data) return null;

  switch (type) {
    default:
    case AutoMapper.TYPES.STRING:
      return data.toString();
    case AutoMapper.TYPES.INTEGER:
      return Number(data) || 0;
  }
};

export const setValueByKeys = (target: any, value: any, keys: string[]) => {
  const len = keys.length;
  const orig = target;

  for (let i = 0; i < len; i++) {
    let prop = keys[i];

    if (!target[prop]) {
      target[prop] = {};
    }

    if (i === len - 1) {
      target[prop] = value;
      break;
    }

    target = target[prop];
  }

  return orig;
};

// export const getValueByKeys = (target: any, dots: string[]) => {
//   let temp = target;
//   dots.forEach(p => (temp = temp[p]));
//   return temp;
// };
