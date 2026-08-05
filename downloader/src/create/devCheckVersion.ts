import logUpdate from "log-update"
import waittime from "../helper/waittime"
import { getBuildVersion } from "../pages/buildVersion"

export default async function devCheckVersion(): Promise<IPrepare> {
  logUpdate.persist("--------")
  logUpdate.persist("🕗 Checking Latest Version")
  await waittime(1000)

  const curFonts = await getBuildVersion()
  await waittime(100)

  logUpdate.persist("--------")
  await waittime(1000)

  logUpdate.persist(" ")
  logUpdate.persist(`Downloading Version ${curFonts.version} of Font Awesome ${curFonts.version.split(".")[0]} Pro Plus`)
  await waittime(1000)

  logUpdate.persist(" ")
  logUpdate.persist("--------")
  await waittime(100)

  logUpdate.persist("🕗 Reading Available Stylesheets")
  await waittime(500)

  const fontlist = curFonts.css.map((file) => `${curFonts.root}/css/${file}`)
  const scriptlist = curFonts.js.map((file) => `${curFonts.root}/js/${file}`)

  logUpdate.persist("✅ Found " + fontlist.length.toString() + " Sytlesheets")
  await waittime(1000)

  return { fontlist, scriptlist, useVer: curFonts.version, baseUrl: curFonts.root }
}
