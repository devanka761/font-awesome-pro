// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type IAny = any

declare interface IfaRelease {
  date: string
  isLatest: boolean
  version: string
}

declare interface IfaReleases {
  releases?: IfaRelease[]
}

declare interface IfaIconFamily {
  shorthand: string
}

declare type IfaIconFamilies = IfaIconFamily[]

declare interface IfaIcon {
  familyStylesByLicense: {
    free: IfaIconFamilies
    pro: IfaIconFamilies
  }
  id: string
}
declare interface IfaIcons {
  icons?: IfaIcon[]
}

declare interface IsvgParsedList {
  shorthands: string[]
  id: string
}

declare interface IfaFamilyStyle {
  shorthand: string
}

declare interface IfaFamilyStyleList {
  familyStyles?: IfaFamilyStyle[]
}

declare interface IPrepare {
  fontlist: string[]
  useVer: string
  baseUrl: string
  scriptlist: string[]
}
