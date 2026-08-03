import fs from "fs"

const fonts = JSON.parse(fs.readFileSync("../src/json/fonts.json", "utf-8"))

export interface Ver {
  version: string
  root: string
  css: string[]
}

export default fonts as Ver
