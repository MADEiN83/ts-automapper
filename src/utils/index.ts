export const getKeysFromPredicate = (
  predicate: (object: any) => any
): string[] => {
  if (!predicate) {
    return [];
  }

  const regex = /(\.\w+)/g;
  const keys = [];
  let stringsArray: RegExpExecArray | null;

  while ((stringsArray = regex.exec(predicate.toString())) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (stringsArray.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    const key = stringsArray[0].replace(".", "");
    keys.push(key);
  }

  return keys;
};

export const setDeepValue = (obj: any, path: string, value: any): void => {
  const keys = path.split(".");
  let tempObject = obj;

  while (keys.length - 1) {
    const aKey = keys.shift() as string;
    const keyExists = aKey in tempObject;

    if (!keyExists) {
      tempObject[aKey] = {};
    }

    tempObject = tempObject[aKey];
  }

  tempObject[keys[0]] = value;
};

export const getDeepValue = (obj: any, path: string): any => {
  path = path.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "");
  const keys = path.split(".");
  let tempObject = obj;

  while (keys.length) {
    const aKey = keys.shift() as string;
    const keyExists = aKey in tempObject;

    if (!keyExists) {
      return;
    }

    tempObject = tempObject[aKey];
  }

  return tempObject;
};
