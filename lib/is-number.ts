export function isNumber(n: number): boolean {
  return Object.prototype.toString.call(n).slice(8, -1) === 'Number';
}
