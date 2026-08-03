import waittime from "../helper/waittime"
import { question } from "../main/question"

export default async function unofficialNotice(): Promise<{ isOk: boolean }> {
  console.log("Font Awesome Pro Plus Downloader | Devanka761")
  await waittime(500)
  console.log("")
  console.log("--------")
  console.log(`Font Awesome Pro Plus Downloader was made for educational purposes only!`)
  await waittime(100)
  console.log("--------")
  await waittime(100)
  console.log(`This downloader provides Paid (Pro Plus) Version for the latest Official Package. It is intended for experimental and personal use only. It is licensed for commercial use.`)
  await waittime(100)
  console.log("--------")
  await waittime(100)
  console.log(`DO NOT use this downloader if you are not a Creator or you have never buy the official product from the official website.`)
  await waittime(100)
  console.log("--------")
  await waittime(100)
  console.log(`To unlock commercial use for your own projects, and get an official product license, please consider to go to the Font Awesome webiste: https://fontawesome.com/plans`)
  await waittime(100)
  console.log("--------")
  await waittime(500)
  let agree = await question(`Continue to download? (Y/n) `)
  agree = agree ? agree.toLowerCase() : "y"
  const notAgrees = ["no", "n", "nope"]
  const isOk = notAgrees.find((textNo) => textNo === agree) ? false : true
  console.log(isOk ? "y" : "n")
  if (!isOk) {
    console.log("--------")
    await waittime(1000)
    console.log("⛔ Font Awesome Pro Plus Downloader Canceled")
    await waittime(1000)
    console.log("DONE")
  }

  return { isOk }
}
