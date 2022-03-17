/**
 * The envTokens object has to be updated during the dev process with a current test environment name!
 * @param environment the name of the Contentful environment 
 * @returns the appropriate space, accessToken, and environment name for the environment as a string
 */

const getConfig = (environment: string): Record<string, string> => {
  
  const envTokens: Record<string, string> = {
    master: process.env.PRODUCTION_TOKEN as string,
    "test-env1": process.env.STAGING_TOKEN_1 as string,
    "test-env2": process.env.STAGING_TOKEN_2 as string,
  };

  return {
    accessToken: envTokens[environment],
    spaceId: process.env.CONTENTFUL_SPACE_ID as string,
    environment,
  } ;
};

export default getConfig;
