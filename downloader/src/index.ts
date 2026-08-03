import waittime from "./helper/waittime"
import askQuestion from "./pages/askQuestions"
import cssDownload from "./pages/cssDownload"
import { downloadFonts, readFonts } from "./pages/fontsDownload"
import checkVersion from "./pages/versionCheck"
import unofficialNotice from "./pages/noticeOfficial"

async function startDownloader(): Promise<void> {
  await waittime(100)
  console.clear()
  const { isOk } = await unofficialNotice()
  if (!isOk) return
  const { useDir } = await askQuestion()
  const { fontlist, useVer, baseUrl } = await checkVersion()
  const cssUrls: string[] = await cssDownload(useVer, useDir, fontlist)
  const fontUrls: string[] = await readFonts(cssUrls, useDir)
  await downloadFonts(fontUrls, useDir, baseUrl)
  await waittime(1000)
  console.log("--------")
  await waittime(1000)
  console.log(`✅ Font Awesome ${useVer.split(".")[0]} Pro Plus v${useVer} Downloaded Successfully!`)
  await waittime(1000)
  console.log("DONE")
  await waittime(1000)
}
export function getFontAwesomePro(): void {
  startDownloader()
}
export function getFapro(): void {
  startDownloader()
}
