// log the pageview with their URL

const isGTMEnabled = () => typeof window !== "undefined" && !!window.dataLayer;

export const GApageview = (url: any) => {
  if (isGTMEnabled()) {
    //@ts-ignore
      window.gtag('config', process.env.NEXT_PUBLIC_GTAG_ID, {
      page_path: url,
    })
  }
}

// log specific events happening - this is currently unused fucntionality
//@ts-ignore
export const event = ({ action, params }) => {
  if (isGTMEnabled()) {
    window.gtag('event', action, params)
  }
}
