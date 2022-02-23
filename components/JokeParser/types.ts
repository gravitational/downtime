import { TagLink } from "contentful";

export interface RawJoke {
  fields: Fields;
  metadata: Metadata;
  sys: JokeSys;
}

interface Fields {
  headline: string;
  image: Image;
  pubDate: string;
  twitterEmbeddedCode: string;
  smoker: string;
  anchor: string;
  slug: string;
}

//image
interface Image {
  fields: ImageFields;
  metadata: Metadata;
  sys: ImageSys;
  twitterHtmlEmbedFull: string;
  twitterImage: string;
}

interface ImageFields {
  file: {
    url: string;
    contentType: string;
    details: {
      image: {
        height: number;
        width: number;
      }
    }
  };
  title: string;
}

interface ImageSys {
  environment: InnerSysKeys;
  createdAt: string;
  id: string;
  locale: string;
  revision: number;
  space: InnerSysKeys;
  type: string;
  updatedAt: string;
}

//metadata
interface Metadata {
  tags: TagLink[];
}
interface JokeSys extends ImageSys {
  contentType: InnerSysKeys;
}
interface InnerSysKeys {
  sys: InnerSysDetails;
}
interface InnerSysDetails {
  id: string;
  linkType: string;
  type: string;
}
