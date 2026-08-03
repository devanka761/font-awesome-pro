import fs from "fs"
import waittime from "../helper/waittime"

export async function addDir(dirpath: string): Promise<void> {
  let curpath = "."
  const dirs: string[] = dirpath.split("/")

  for (const dir of dirs) {
    curpath += `/${dir}`
    if (!fs.existsSync(curpath)) {
      fs.mkdirSync(curpath)
      await waittime(100)
    }
  }
}
