// Token configuration - Updated with new token address
export const TOKEN_CONFIG = {
  // New token address
  address: "3h9qxTziiuyH8vc3RVnZHUiihUVq2y8engyPGuPxpump",

  // Enable live data to test the system
  enableLiveData: false,

  // Fallback static data (used when live data fails)
  staticData: {
    marketCap: "$420K",
    holders: "1,337",
    liquidity: "$69K",
    supplyBurned: "25%",
  },

  // Refresh interval in milliseconds (30 seconds)
  refreshInterval: 30000,

  // Display settings
  displayName: "VEX", // Your token name
  displaySymbol: "$VEX", // Your token symbol

  // Example mode (set to false after your token launch)
  isExample: false,
  exampleTokenName: "Test Token", // Just for demo purposes

  // API settings
  useSolanaData: false, // Disable Solana RPC calls if they're causing issues
  usePumpFunData: true, // Keep pump.fun API enabled
}
