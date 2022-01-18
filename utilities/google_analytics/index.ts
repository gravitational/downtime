// log the pageview with their URL
export const GApageview = (url: any) => {
  if (typeof window !== undefined) {
    //@ts-ignore
    window.gtag('config', process.env.NEXT_PUBLIC_GTAG_ID, {
      page_path: url,
    })
  }
}

// log specific events happening - this is currently unused fucntionality

//@ts-ignore
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
