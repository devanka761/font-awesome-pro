import { getOfficialIcons, getOfficialRelease } from "../helper/official"
import defVer from "../helper/fonts"
import { downloadFile } from "../main/file-downloader"
import logUpdate from "log-update"

const baseUrl = "https://site-assets.fontawesome.com/releases"

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

      const url = `${releaseUrl}/svgs-full/${shorthands[i]}/${iconId}.svg`

      const usePrintLog = ipack > lastPack

      lastPack = ipack

      await downloadFile(url, dir, `${progress}`, !usePrintLog)
    }
  }

  logUpdate.persist("✅ SVG Singles-Full Downloaded")
}

startDownloadSingles()
