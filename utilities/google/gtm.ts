declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

export const GTMPageView = (url : URL) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
