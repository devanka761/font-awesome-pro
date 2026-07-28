import fs from "fs"
import waittime from "../helper/waittime"

const pName = "font-awesome-pro"
const cssFolder = `${pName}/css`

function manageAllCss(useDir: string, cssUrls: string[]): void {
  const allstyles = cssUrls.map((css) => `@import "${cssFolder}/${css}";`).join("\n")
  fs.writeFileSync(`./${useDir}/css/allstyles.css`, `${allstyles}\n`, "utf-8")
  if (!fs.existsSync(`./${useDir}/scss`)) fs.mkdirSync(`./${useDir}/scss`)
  fs.writeFileSync(`./${useDir}/scss/allstyles.scss`, `@use "${cssFolder}/allstyles.css";\n`, "utf-8")
  cssUrls.forEach((css) => {
    const cssDir = `./${useDir}/css/${css}`
    const newCssFile = fs.readFileSync(cssDir, "utf-8").replace(/\.\./g, pName)
    fs.writeFileSync(cssDir, newCssFile, "utf-8")
    const scssDir = `./${useDir}/scss/${css.replace(".css", ".scss")}`
    const scssContent = `@use "${cssFolder}/${css}";\n`
    fs.writeFileSync(scssDir, scssContent, "utf-8")
  })
}

export async function createRelease(useDir: string, cssUrls: string[]): Promise<void> {
  await waittime(1000)
  console.log("--------")
  console.log("🕗 Creating Assets Folder")
  manageAllCss(useDir, cssUrls)
  await waittime(1000)
  fs.cpSync(useDir, "dist", { recursive: true })
  fs.rmSync(useDir, { recursive: true, force: true })
}
