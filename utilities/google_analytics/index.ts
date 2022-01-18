// log the pageview with their URL
export const pageview = (url: any) => {
  //@ts-ignore
  window.gtag('config', process.env.NEXT_PUBLIC_GTAG_ID, {
    page_path: url,
  })
}

// log specific events happening.

//@ts-ignore
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
