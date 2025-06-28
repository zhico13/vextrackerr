"use client"

import { useState, useEffect } from "react"
import { TOKEN_CONFIG } from "@/lib/config"
import { fetchPumpFunData, formatMarketCap, formatLiquidity } from "@/lib/pump-api"
import { fetchSolanaTokenData, formatHolders } from "@/lib/solana-api"

export interface TokenStats {
  marketCap: string
  holders: string
  liquidity: string
  supplyBurned: string
  isLoading: boolean
  lastUpdated: Date | null
  error: string | null
  tokenName?: string
  tokenSymbol?: string
}

export function useTokenData(): TokenStats {
  const [stats, setStats] = useState<TokenStats>({
    marketCap: TOKEN_CONFIG.staticData.marketCap,
    holders: TOKEN_CONFIG.staticData.holders,
    liquidity: TOKEN_CONFIG.staticData.liquidity,
    supplyBurned: TOKEN_CONFIG.staticData.supplyBurned,
    isLoading: false,
    lastUpdated: null,
    error: null,
  })

  const fetchLiveData = async () => {
    if (!TOKEN_CONFIG.enableLiveData || !TOKEN_CONFIG.address) {
      return
    }

    setStats((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      console.log("Fetching live data...")

      // Try to fetch pump.fun data first
      let pumpData = null
      try {
        pumpData = await fetchPumpFunData(TOKEN_CONFIG.address)
      } catch (pumpError) {
        console.error("Error fetching pump.fun data:", pumpError)
        // Continue with pumpData = null
      }

      // Try to fetch Solana data
      let solanaData = null
      try {
        solanaData = await fetchSolanaTokenData(TOKEN_CONFIG.address)
      } catch (solanaError) {
        console.error("Error fetching Solana data:", solanaError)
        // Continue with solanaData = null
      }

      // If we got at least some data, update the stats
      if (pumpData || solanaData) {
        const newStats = {
          marketCap: pumpData
            ? formatMarketCap(pumpData.usd_market_cap || pumpData.market_cap)
            : TOKEN_CONFIG.staticData.marketCap,
          holders: solanaData ? formatHolders(solanaData.holders) : TOKEN_CONFIG.staticData.holders,
          liquidity: pumpData ? formatLiquidity(pumpData.virtual_sol_reserves) : TOKEN_CONFIG.staticData.liquidity,
          supplyBurned:
            solanaData && solanaData.totalSupply > 0
              ? `${((solanaData.burnedSupply / solanaData.totalSupply) * 100).toFixed(1)}%`
              : TOKEN_CONFIG.staticData.supplyBurned,
          isLoading: false,
          lastUpdated: new Date(),
          error: null,
          tokenName: pumpData?.name,
          tokenSymbol: pumpData?.symbol,
        }

        console.log("Live data updated:", newStats)
        setStats(newStats)
      } else {
        // If both APIs failed, show a partial error
        setStats((prev) => ({
          ...prev,
          isLoading: false,
          lastUpdated: new Date(),
          error: "Using fallback data",
        }))
      }
    } catch (error) {
      console.error("Error in data fetching process:", error)
      setStats((prev) => ({
        ...prev,
        isLoading: false,
        error: "Failed to fetch live data",
      }))
    }
  }

  useEffect(() => {
    // Initial fetch
    fetchLiveData()

    // Set up interval for live updates
    if (TOKEN_CONFIG.enableLiveData) {
      const interval = setInterval(fetchLiveData, TOKEN_CONFIG.refreshInterval)
      return () => clearInterval(interval)
    }
  }, [])

  return stats
}
