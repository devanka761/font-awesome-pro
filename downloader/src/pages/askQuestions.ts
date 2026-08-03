import { question } from "../main/question"
import waittime from "../helper/waittime"

export default async function askQuestion(): Promise<{ useDir: string }> {
  console.log("--------")
  await waittime(1000)
  console.log(" ")
  await waittime(100)
  console.log(`Set the Download Path!`)
  await waittime(100)
  console.log("--------")
  await waittime(100)
  console.log("Download path can be " + "`path/to/your/public/folder`" + " or " + "`anything`" + ".")
  await waittime(100)
  console.log("--------")
  await waittime(100)
  console.log("if the path does not exist, it will be created automatically.")
  await waittime(500)
  console.log("--------")
  const dir = await question(`Enter download path: (fapro) `)
  const useDir = dir ? dir : "fapro"
  console.log(`${useDir}${dir ? "" : " (default)"}`)
  console.log("--------")
  await waittime(750)
  console.log(" ")
  console.log("Preparing Downloader")
  await waittime(2250)
  console.log(" ")
  return { useDir }
}
