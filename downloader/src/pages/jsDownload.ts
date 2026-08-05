import { downloadFile, getDownloaded } from "../main/file-downloader"
import waittime from "../helper/waittime"

export default async function jsDownload(useVer: string, useDir: string, scriptlist: string[]): Promise<string[]> {
  console.log("--------")
  console.log(`🕗 Downloading All Scripts`)
  await waittime(1000)

  const dir = `${useDir}/js`

  for (let i = 0; i < scriptlist.length; i++) {
    const url = scriptlist[i]
    const progress = `[${i + 1}/${scriptlist.length}]`
    await downloadFile(url, dir, progress)
  }
  console.log("✅ Scripts Downloaded")
  await waittime(1000)

  return getDownloaded()
}
