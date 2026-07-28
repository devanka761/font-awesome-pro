import { Ver } from "./fa.types"
import defVer from "../json/fonts.json"
import waittime from "../helper/waittime"

async function getVersion(): Promise<Ver> {
  const url = `https://raw.githubusercontent.com/devanka761/font-awesome-pro/refs/heads/master/src/json/fonts.json?ts=${Date.now().toString(36)}`

  return await fetch(url, {
    method: "GET"
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(`✅ Found: v${res.version}`)
      return res
    })
    .catch(() => {
      console.log(`⛔ Error getting the latest version!`)
      console.log(`⛔ Forced Using v${defVer.version}`)
      return defVer
    })
}

export default async function checkVersion(): Promise<{ fontlist: string[]; useVer: string; baseUrl: string }> {
  console.log("--------")
  console.log("🕗 Checking Latest Version")
  await waittime(1000)
  const curFonts = await getVersion()
  await waittime(100)
  console.log("--------")
  await waittime(1000)
  console.log(" ")
  console.log(`Downloading Version ${curFonts.version} of Font Awesome ${curFonts.version.split(".")[0]} Pro Plus`)
  await waittime(1000)
  console.log(" ")
  console.log("--------")
  await waittime(100)
  console.log("🕗 Reading Available Stylesheets")
  await waittime(500)
  const fontlist = curFonts.css.map((file) => `${curFonts.root}/css/${file}`)
  console.log("✅ Found " + fontlist.length.toString() + " Sytlesheets")
  await waittime(1000)
  return { fontlist, useVer: curFonts.version, baseUrl: curFonts.root }
}
