export function injectValueToPath<T>(value: T, path: string, obj: any): void {
  const segments = path.split(".");
  let currentObj = obj;

  for (let i = 0; i < segments.length - 1; i++) {
    const segment = segments[i];
    if (!currentObj[segment]) {
      currentObj[segment] = {};
    }
    currentObj = currentObj[segment];
  }

  const lastSegment = segments[segments.length - 1];
  currentObj[lastSegment] = value;
}

export function deepMerge(target: any, ...sources: any) {
  if (!sources.length) return target;
  const source = sources.shift();

  for (const key in source) {
    if (source[key] instanceof Object) {
      if (!target[key]) Object.assign(target, { [key]: {} });
      deepMerge(target[key], source[key]);
    } else {
      Object.assign(target, { [key]: source[key] });
    }
  }

  return deepMerge(target, ...sources);
}
