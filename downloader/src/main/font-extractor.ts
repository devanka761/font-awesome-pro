import fs from "fs"
import postcss from "postcss"
import safeParser from "postcss-safe-parser"

let fontUrls: string[] = []

export async function extractFont(filename: string, filedir: string): Promise<void> {
  const css = fs.readFileSync(`./${filedir}/${filename}`, "utf8")
  await postcss()
    .process(css, { parser: safeParser, from: undefined })
    .then((result) => {
      result.root.walkAtRules("font-face", (rule) => {
        rule.walkDecls("src", (decl) => {
          const matches = decl.value.match(/url\(([^)]+)\)/g)
          if (matches) {
            matches.forEach((url) => {
              const cleanUrl = url.replace(/url\(["']?/, "").replace(/["']?\)/, "")
              fontUrls.push(cleanUrl)
            })
          }
        })
      })
    })
}

export function getFonts(): string[] {
  const fixedFonts: string[] = [...fontUrls]
  fontUrls = []
  return fixedFonts
}
