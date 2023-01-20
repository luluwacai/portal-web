declare namespace NodeJS {
  interface ProcessEnv {
    NAVIGATION_MENU_HOME_URL: string
    NAVIGATION_MENU_CREATE_URL: string
    NAVIGATION_MENU_EXPLORE_URL: string
    NAVIGATION_MENU_INTERACT_URL: string
    NAVIGATION_MENU_LEARN_URL: string
    NAVIGATION_MENU_OKP4_URL: string
    OKP4_DISCORD_URL: string
    OKP4_GITHUB_URL: string
    OKP4_LINKEDIN_URL: string
    OKP4_MEDIUM_URL: string
    OKP4_TELEGRAM_URL: string
    OKP4_TWITTER_URL: string
    OKP4_WEBSITE_URL: string
    // The data folder path
    DATA_PATH: string
    // THE API uri
    API_URI: string
    // Default dataspace loaded inside the homepage
    DEFAULT_DATASPACE_ID: string
    CHAIN_ID: string
    CHAIN_NAME: string
    CHAIN_RPC_ENDPOINT: string
    CHAIN_REST_ENDPOINT: string
    TX_MEMO: string
    TX_RECIPIENT_ADDRESS: string
    OKP4_BI_URL: string
    WORKFLOW_ARGO_API_URL: string
    WORKFLOW_ARGO_CLIENT_URL: string
    WORKFLOW_ARGO_AUTHENTICATION_BEARER: string
  }
}

declare module 'next/config' {
  declare const _default: () => {
    publicRuntimeConfig: {
      version: string
      defaultDataspaceId: string
    }
  }

  export default _default
}
