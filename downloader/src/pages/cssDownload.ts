import { downloadFile, getDownloaded } from "../main/file-downloader"
import waittime from "../helper/waittime"

export default async function cssDownload(useVer: string, useDir: string, fontlist: string[]): Promise<string[]> {
  console.log("--------")
  console.log(`🕗 Downloading All Stylesheets`)
  await waittime(1000)

  const dir = `${useDir}/css`

  for (let i = 0; i < fontlist.length; i++) {
    const url = fontlist[i]
    const progress = `[${i + 1}/${fontlist.length}]`
    await downloadFile(url, dir, progress)
  }
  console.log("✅ Stylesheets Downloaded")
  await waittime(1000)
  return getDownloaded()
}
