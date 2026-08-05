import { getOfficialIcons, getOfficialRelease } from "../helper/official"
import defVer from "../helper/fonts"
import { downloadFile } from "../main/file-downloader"

const baseUrl = "https://site-assets.fontawesome.com/releases"

export async function startDownloadSingles(): Promise<void> {
  const officialRelease = await getOfficialRelease()

  const officialLatest = officialRelease?.releases?.find((k) => k.isLatest === true)

  const useVersion = officialLatest?.version || defVer.version

  const officialIcons = await getOfficialIcons(useVersion)

  const releaseUrl = `${baseUrl}/v${useVersion}`

  for (let ipack = 0; ipack < officialIcons.length; ipack++) {
    const shorthands = officialIcons[ipack].shorthands
    const iconId = officialIcons[ipack].id

    for (let i = 0; i < shorthands.length; i++) {
      const dir1 = `../dist/svgs/${shorthands[i]}`
      const dir2 = `../dist/svgs-full/${shorthands[i]}`

      const progress1 = `[${ipack + 1}/${officialIcons.length}]`
      const progress2 = shorthands[i]

      const url1 = `${releaseUrl}/svgs/${shorthands[i]}/${iconId}.svg`
      const url2 = `${releaseUrl}/svgs-full/${shorthands[i]}/${iconId}.svg`

      await downloadFile(url1, dir1, `${progress1} ${progress2}`, true)
      await downloadFile(url2, dir2, `${progress1} ${progress2}`)
    }
  }
}
