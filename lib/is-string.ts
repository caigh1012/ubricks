export function isString(str: string): boolean {
  return Object.prototype.toString.call(str).slice(8, -1) === 'String';
}
