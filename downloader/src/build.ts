import fs from "fs"
import { getBuildVersion } from "./pages/buildVersion"

async function startBuildVersion(): Promise<void> {
  const newFonts = await getBuildVersion()

  const fontsToString = JSON.stringify(newFonts, null, 2)

  fs.writeFileSync("../src/json/fonts.json", fontsToString, "utf-8")
}

startBuildVersion()
