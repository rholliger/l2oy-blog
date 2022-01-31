export interface Responsive {
  mobileS: string
  mobileM: string
  mobileL: string
  mobileXL: string
  tablet: string
  laptop: string
  laptopL: string
  desktop: string
}

export const sizes = {
  mobileS: 319,
  mobileM: 374,
  mobileL: 424,
  mobileXL: 560,
  tablet: 767,
  laptop: 1023,
  laptopL: 1439,
  desktop: 2559,
}

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS}px)`,
  mobileM: `(max-width: ${sizes.mobileM}px)`,
  mobileL: `(max-width: ${sizes.mobileL}px)`,
  mobileXL: `(max-width: ${sizes.mobileXL}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
  laptop: `(max-width: ${sizes.laptop}px)`,
  laptopL: `(max-width: ${sizes.laptopL}px)`,
  desktop: `(max-width: ${sizes.desktop}px)`,
}
