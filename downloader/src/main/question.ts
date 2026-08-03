import readline from "readline"

export function question(text: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question(text, (anwer) => {
      resolve(anwer)
      rl.close()
    })
  })
}
