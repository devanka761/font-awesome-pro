const apiUrl = "https://api.fontawesome.com/releases"

export async function getOfficialRelease(): Promise<IfaReleases | null> {
  return await fetch(apiUrl, {
    method: "GET"
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res?.releases) {
        throw new Error("⛔ Error getting version list!")
      }
      console.log(`✅ Found version list`)
      return res
    })
    .catch(() => {
      console.log(`⛔ Error getting version list!`)
      return null
    })
}

export async function getIcons(useVersion: string, n: number): Promise<IfaIcons | null> {
  const iconsUrl = `${apiUrl}/${useVersion}/icons?page=${n}&page_size=500`

  return await fetch(iconsUrl, {
    method: "GET"
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res?.icons) {
        throw new Error("⛔ Error getting version list!")
      }
      console.log(`✅ Found icon list page ${n}`)
      return res
    })
    .catch(() => {
      console.log(`⛔ Error getting icon list page ${n}!`)
      return null
    })
}

export async function getOfficialIcons(useVersion: string): Promise<IsvgParsedList[]> {
  const ICONS: IsvgParsedList[] = []

  let iconPage: number = 1

  const getAllIcons = async (n: number) => {
    const iconPack = await getIcons(useVersion, n)
    if (!iconPack || !iconPack.icons) {
      throw new Error(`⛔ Error icon list page ${n}!`)
    }

    const iconObject = iconPack.icons

    iconObject.forEach((ic) => {
      const freeFamilies = ic.familyStylesByLicense.free
      const proFamilies = ic.familyStylesByLicense.pro

      const freeShorthands = freeFamilies.map((fam) => fam.shorthand)
      const proShorthands = proFamilies.map((fam) => fam.shorthand)

      ICONS.push({
        shorthands: [...freeShorthands, ...proShorthands],
        id: ic.id
      })
    })

    if (iconPack.icons.length >= 1) {
      iconPage++

      await getAllIcons(iconPage)
    }
  }

  await getAllIcons(iconPage)

  return ICONS
}

export async function getOfficialFamily(useVersion: string): Promise<string[] | null> {
  const familyUrl = `${apiUrl}/${useVersion}/family-styles`

  const familyStyles: IfaFamilyStyleList | null = await fetch(familyUrl, {
    method: "GET"
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res?.familyStyles) {
        throw new Error("⛔ Error getting family styles!")
      }
      console.log(`✅ Found family styles`)
      return res
    })
    .catch(() => {
      console.log(`⛔ Error getting family styles!`)
      return null
    })

  if (!familyStyles || !familyStyles.familyStyles) return null

  return familyStyles.familyStyles.map((fam) => fam.shorthand)
}
