export default function waittime(ms: number = 500, n: number = 5): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms - n))
}
