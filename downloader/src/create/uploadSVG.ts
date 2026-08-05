import waittime from "../helper/waittime"
import { startDownloadSingles } from "./uploadSingles"
import { startDownloadSprites } from "./uploadSprite"

async function startDownloadSVG(): Promise<void> {
  await startDownloadSingles()
  await startDownloadSprites()

  await waittime(1000)

  console.log("--------")
  console.log(" ")
  console.log("DONE")
}

startDownloadSVG()
