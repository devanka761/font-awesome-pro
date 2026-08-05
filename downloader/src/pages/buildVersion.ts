import { getOfficialFamily, getOfficialRelease } from "../helper/official"
import { Ver } from "../helper/fonts"

const addedCSS: string[] = ["fontawesome.css", "all.css", "svg.css", "svg-with-js.css", "v4-font-face.css", "v4-shims.css", "v5-font-face.css"]
const addedJS: string[] = ["fontawesome.js", "all.js", "conflict-detection.js", "v4-shims.js"]

export async function getBuildVersion(): Promise<Ver> {
  const officialRelease = await getOfficialRelease()

  const officialLatest = officialRelease?.releases?.find((k) => k.isLatest === true)

  if (!officialLatest?.version) {
    throw new Error("⛔ Error getting new version!")
  }

  const useVersion = officialLatest.version

  const officialFamilies = await getOfficialFamily(useVersion)

  if (!officialFamilies) {
    throw new Error("⛔ Error getting family styles!")
  }

  console.log(`✅ Font Awesome Pro+ v${useVersion}`)

  const newCssFam = officialFamilies.map((fam) => `${fam}.css`)
  const newJsFam = officialFamilies.map((fam) => `${fam}.js`)

  const newFonts: Ver = {
    version: useVersion,
    root: `https://site-assets.fontawesome.com/releases/v${useVersion}`,
    css: [...newCssFam, ...addedCSS],
    js: [...newJsFam, ...addedJS]
  }

  return newFonts
}
