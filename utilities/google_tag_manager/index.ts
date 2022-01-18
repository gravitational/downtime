interface Event {
  [key: string]: unknown;
  event: string;
}

declare global {
  var dataLayer: Event[]
}

export const GTMpageview = (url: string) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}