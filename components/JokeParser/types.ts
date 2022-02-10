export interface RawJoke {
  fields: {
    headline: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    twitterImage: string;
    date: string;
    twitterHtmlEmbedFull: string;
    smoker: string;
    anchor: string;
  };
  metadata: {};
  sys: {
    space: {};
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  };
}
