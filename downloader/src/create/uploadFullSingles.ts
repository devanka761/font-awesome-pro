import fs from "fs"
import { getOfficialIcons, getOfficialRelease } from "../helper/official"
import defVer from "../helper/fonts"
import { downloadFile } from "../main/file-downloader"
import waittime from "../helper/waittime"

const baseUrl = "https://site-assets.fontawesome.com/releases"

const isNewOnly = process.argv.some((k) => k === "--newOnly=true")

export async function startDownloadSingles(): Promise<void> {
  const officialRelease = await getOfficialRelease()

  const officialLatest = officialRelease?.releases?.find((k) => k.isLatest === true)

  const useVersion = officialLatest?.version || defVer.version

  const officialIcons = await getOfficialIcons(useVersion)

  const releaseUrl = `${baseUrl}/v${useVersion}`

  let lastPack: number = -1

  for (let ipack = 0; ipack < officialIcons.length; ipack++) {
    const shorthands = officialIcons[ipack].shorthands
    const iconId = officialIcons[ipack].id

    for (let i = 0; i < shorthands.length; i++) {
      const dir = `../dist/svgs-full/${shorthands[i]}`

      const progress = `[${ipack + 1}/${officialIcons.length}]`

      const fileName = `${iconId}.svg`

      const url = `${releaseUrl}/svgs-full/${shorthands[i]}/${fileName}`

      const usePrintLog = ipack > lastPack

      lastPack = ipack

      const fileExists = fs.existsSync(`${dir}/${fileName}`)

      if (isNewOnly && fileExists) {
        console.log(`? ${progress} ${fileName} (existed)`)
        await waittime(2000)
      } else {
        await downloadFile(url, dir, progress, !usePrintLog)
      }
    }
  }

  console.log("+ SVG Singles-Full Downloaded")
}

startDownloadSingles()
