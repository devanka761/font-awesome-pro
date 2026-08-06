import logUpdate from "log-update"
import { Downloader } from "nodejs-file-downloader"
import { addDir } from "./dir-checker"
import waittime from "../helper/waittime"

let filesDownloaded: string[] = []

export async function downloadFile(fileurl: string, filedir: string, progress: string | null = null, useNoLog: boolean = false): Promise<void> {
  await addDir(`${filedir}`)
  const downloader = new Downloader({
    url: fileurl,
    directory: `./${filedir}`,
    cloneFiles: false,
    headers: {
      // manipulate downloader ariving
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",

      // manipulate extension (for strict cdn)
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",

      // anti-bot bypass
      "Accept-Language": "en-US,en;q=0.9,id;q=0.8",

      // anti-bot bypass
      Connection: "keep-alive",

      // anti-bot bypass
      "Upgrade-Insecure-Requests": "1",

      // same site bypass
      Referer: "https://site-assets.fontawesome.com/",
      Origin: "https://site-assets.fontawesome.com",

      // same site bypass
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-User": "?1",

      // anti-bot bypass
      "sec-ch-ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"'
    }
  })

  let retry: number = 1

  const commitDownload = async () => {
    try {
      await downloader.download()
      const fileorigin = fileurl.split("/")
      const filename = fileorigin[fileorigin.length - 1]
      if (!useNoLog) {
        logUpdate(`🚀 ${progress ? progress + " " : ""}${filename}`)
      }
      filesDownloaded.push(filename)
    } catch (_error) {
      if (retry > 10) return

      logUpdate(`⛔ Error ${fileurl} 🕗 Retrying #${retry}`)

      retry++

      await waittime(3000)

      return await commitDownload()
    }
  }

  await commitDownload()
}
export function getDownloaded(): string[] {
  const files: string[] = [...filesDownloaded]
  filesDownloaded = []
  return files
}
