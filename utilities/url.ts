// export const host = process.env.DOWNTIME_PUBLIC_HOST;


// // interface URLParts {
// //   hostValue?: string;
// //   path: string;
// // }

// export const buildURL = (path: string, hostValue: string | undefined = host): string => {
//   return `${hostValue}${path}`
// }

export const host = process.env.DOWNTIME_PUBLIC_HOST;

interface URLParts {
  anchor?: string;
  path: string;
  query: Record<string, string>;
}

export const splitPath = (fullPath: string): URLParts => {
  const [rest, anchor] = fullPath.split("#");
  const [path, search] = rest.split("?");
  const query: Record<string, string> = !search
    ? {}
    : search.split("&").reduce((result, segment) => {
        const [key, value] = segment.split("=");

        result[key] = value;

        return result;
      }, {});

  return { anchor, path, query };
};

export const buildPath = (parts: URLParts): string => {
  let result = parts.path;

  const search = Object.entries(parts.query)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  if (search) {
    result = `${result}?${search}`;
  }

  if (parts.anchor) {
    result = `${result}#${parts.anchor}`;
  }

  return result;
};

// Ensure that relative lins always starts with ./, can be needed to open files in Node

export const relatify = (href: unknown) => {
  if (typeof href !== "string") {
    return;
  }

  return !/\.\.?\//.test(href) ? `./${href}` : href;
};

// router.asPath returns original path before rewrites, so to match
// broser url with url in asPath we need to first apply rewrites to it
// manually

export const normalizePath = (fullPath: string) => {
  const parts = splitPath(fullPath);

  parts.path = parts.path.replace(
    `/ver/${process.env.DOCS_LATEST_VERSION}`,
    ""
  );

  // In SSR mode next ignores trailingSlsh option in asPath
  if (!parts.path.endsWith("/")) {
    parts.path = `${parts.path}/`;
  }

  return buildPath(parts);
};

// urls in meta and link tags in the headers should be absolute

export const buildCanonicalUrl = (path: string) =>
  `${host}${normalizePath(splitPath(path).path)}`;

export const getExtension = (href: string): string | undefined => {
  const parts = href.split("/");
  const filename = parts[parts.length - 1];

  if (filename.indexOf(".") !== -1) {
    // should catch double extensions like `.tag.gz` and `.gitignore`
    return /[^.]*\.(.+)/.exec(filename)[1];
  }
};

export const isExternalLink = (href: string): boolean =>
  href.startsWith("//") || href.startsWith("mailto:") || href.includes("://");

export const isHash = (href: string): boolean => href.startsWith("#");

export const isMdxLink = (href: string): boolean => /\.md(x)?(#|$)/.test(href);

export const isPage = (href: string): boolean =>
  isMdxLink(href) || !getExtension(href);

interface IsLocalAssetFileProps {
  extWhiteList?: string[];
  extBlackList?: string[];
}

export const isLocalAssetFile = (
  href: unknown,
  options: IsLocalAssetFileProps = {}
) => {
  if (typeof href !== "string") {
    return false;
  }

  const { extWhiteList = [], extBlackList = [] } = options;

  const { path } = splitPath(href);
  const ext = getExtension(path);

  return (
    !isExternalLink(path) &&
    !path.startsWith("/") &&
    !!ext &&
    (extBlackList.length ? !extBlackList.includes(ext) : false) &&
    (extWhiteList.length ? extWhiteList.includes(ext) : true)
  );
};
