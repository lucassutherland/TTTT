export function validateLoginCode(code: string): boolean {
  console.log(code);
  const random = Math.random();
  if (random > 0.5) return true;
  return false;
}
