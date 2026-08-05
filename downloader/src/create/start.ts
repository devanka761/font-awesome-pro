import fs from "fs"
import waittime from "../helper/waittime"
import cssDownload from "../pages/cssDownload"
import { downloadFonts, readFonts } from "../pages/fontsDownload"
import { createRelease } from "./release"
import devCheckVersion from "./devCheckVersion"
import jsDownload from "../pages/jsDownload"
import logUpdate from "log-update"

const useDir = "temp"

async function startDownloader(): Promise<void> {
  fs.rmSync(useDir, { recursive: true, force: true })
  fs.rmSync("../dist/css", { recursive: true, force: true })
  fs.rmSync("../dist/webfonts", { recursive: true, force: true })
  fs.rmSync("../dist/scss", { recursive: true, force: true })
  fs.rmSync("../dist/js", { recursive: true, force: true })
  await waittime(100)

  const { fontlist, scriptlist, useVer, baseUrl } = await devCheckVersion()

  const cssUrls: string[] = await cssDownload(useVer, useDir, fontlist)

  const fontUrls: string[] = await readFonts(cssUrls, useDir)

  await downloadFonts(fontUrls, useDir, baseUrl)

  await jsDownload(useVer, useDir, scriptlist)

  await waittime(1000)

  await createRelease(useDir, cssUrls)

  logUpdate.persist(`✅ Font Awesome ${useVer.split(".")[0]} Pro Plus v${useVer} is Ready!`)
  await waittime(1000)

  logUpdate.persist("--------")
  logUpdate.persist(" ")
  logUpdate.persist("DONE")

  await waittime(1000)
}

startDownloader()
