
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  //"as string" added per https://stackoverflow.com/questions/68136888/types-gtag-js-error-argument-of-type-config-is-not-assignable-to-parameter
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string, {
    page_path: url,
  })
}
