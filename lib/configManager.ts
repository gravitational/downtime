const getConfig = (environment: string) => {
  console.log("env", environment)
  let accessToken;
  if (environment === "test-env1") {
    accessToken = process.env.STAGING_CONTENTFUL_DELIVERY_ACCESS_TOKEN
  } else {
    accessToken = process.env.PRODUCTION_CONTENTFUL_DELIVERY_ACCESS_TOKEN
  }

  return {
    accessToken,
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    environment
  }
}

export default getConfig
