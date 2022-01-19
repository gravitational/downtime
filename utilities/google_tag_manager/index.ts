interface Event {
  [key: string]: unknown;
  event: string;
}

declare global {
  var dataLayer: Event[];
}

const isGTMEnabled = () => typeof window !== "undefined" && !!window.dataLayer;

export const GTMpageview = (url: string) => {
  if (isGTMEnabled()) {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};
