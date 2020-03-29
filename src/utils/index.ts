export const getKeysFromPredicate = (
  predicate: (object: any) => any
): string[] => {
  if (!predicate) return [];

  const regex = /(\.\w+)/g;
  const keys = [];
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

export const setDeepValue = (obj: any, path: string, value: any): void => {
  var keys = path.split(".");
  var tempObject = obj;
  while (keys.length - 1) {
    const aKey = keys.shift();
    if (!aKey) {
      break;
    }

    if (!(aKey in tempObject)) tempObject[aKey] = {};
    tempObject = tempObject[aKey];
  }
  tempObject[keys[0]] = value;
};

export const getDeepValue = (obj: any, path: string): any => {
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  const keys = path.split(".");
  var tempObject = obj;

  while (keys.length) {
    const aKey = keys.shift();
    if (!aKey) {
      break;
    }

    if (!(aKey in tempObject)) {
      return;
    }

    tempObject = tempObject[aKey];
  }
  return tempObject;
};
