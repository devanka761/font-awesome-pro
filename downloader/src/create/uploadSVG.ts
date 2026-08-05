import logUpdate from "log-update"
import waittime from "../helper/waittime"
import { startDownloadSingles } from "./uploadSingles"
import { startDownloadSprites } from "./uploadSprite"

async function startDownloadSVG(): Promise<void> {
  await startDownloadSingles()
  await startDownloadSprites()

  logUpdate.persist("✅ SVGs Downloaded")

  await waittime(1000)

  logUpdate.persist("--------")
  logUpdate.persist(" ")
  logUpdate.persist("DONE")
}

startDownloadSVG()
