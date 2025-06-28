"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, RefreshCw, AlertCircle } from "lucide-react"
import { useTokenData } from "@/hooks/useTokenData"
import { TOKEN_CONFIG } from "@/lib/config"

export default function VexMemecoin() {
  const tokenStats = useTokenData()

  // URL'ler için fonksiyonlar - sadece ana sitelere yönlendirme
  const handleBuyClick = () => {
    window.open("https://pump.fun", "_blank")
  }

  const handleViewChartClick = () => {
    window.open("https://dexscreener.com", "_blank")
  }

  const statsData = [
    {
      label: "Market Cap",
      value: tokenStats.marketCap,
      icon: TrendingUp,
      color: "text-[#7efb74]",
    },
    {
      label: "Liquidity",
      value: tokenStats.liquidity,
      icon: Zap,
      color: "text-[#7efb74]",
    },
    {
      label: "Supply Burned",
      value: tokenStats.supplyBurned,
      icon: "🔥",
      color: "text-[#ff6b6b]",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f07] text-[#a8d5ba]">
      {/* Header */}
      <header className="border-b border-[#2ddc58]/30 bg-[#121a0e]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <div
                  className="w-8 h-8"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon128-5ABOBgGYTwZ0j919mAmg0OcVBeK2Hf.png')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    imageRendering: "pixelated",
                    imageRendering: "-moz-crisp-edges",
                    imageRendering: "crisp-edges",
                    filter: "contrast(1.1) brightness(1.1)",
                  }}
                ></div>
              </div>
              <h1 className="text-xl font-bold text-[#7efb74] pixel-font">{TOKEN_CONFIG.displaySymbol}</h1>
              {TOKEN_CONFIG.isExample && (
                <Badge className="bg-[#ff6b6b]/20 text-[#ff6b6b] border-[#ff6b6b] pixel-font text-xs">DEMO MODE</Badge>
              )}
            </div>
            <div className="flex items-center gap-3">
              {TOKEN_CONFIG.enableLiveData && (
                <div className="flex items-center gap-2 text-xs text-[#a8d5ba]">
                  {tokenStats.isLoading ? (
                    <RefreshCw className="w-3 h-3 animate-spin" />
                  ) : tokenStats.error ? (
                    <AlertCircle className="w-3 h-3 text-[#ff6b6b]" />
                  ) : (
                    <div className="w-2 h-2 bg-[#2ddc58] rounded-full animate-pulse"></div>
                  )}
                  <span className="pixel-font">{tokenStats.error ? "FALLBACK" : "LIVE"}</span>
                </div>
              )}
              <Button size="sm" className="bg-[#2ddc58] hover:bg-[#7efb74] text-black pixel-font text-xs">
                Add Extension
              </Button>
              <Button
                size="sm"
                className="bg-[#2ddc58] hover:bg-[#7efb74] text-black pixel-font text-xs cursor-pointer"
                onClick={handleBuyClick}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Notice */}
      {TOKEN_CONFIG.isExample && (
        <div className="bg-[#ff6b6b]/10 border-b border-[#ff6b6b]/30 py-2 px-4">
          <div className="container mx-auto text-center">
            <p className="text-xs text-[#ff6b6b] pixel-font">
              🚀 DEMO MODE: Showing {tokenStats.tokenName || TOKEN_CONFIG.exampleTokenName} token data. Replace with
              your token address after pump.fun launch!
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2ddc58]/20 via-transparent to-[#7efb74]/10"></div>
        <div className="container mx-auto relative z-10 max-w-4xl">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 pixel-font text-[#7efb74] drop-shadow-[0_0_15px_#2ddc58]">
            {TOKEN_CONFIG.displayName}
          </h1>

          {/* Subtitle */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-[#2ddc58] pixel-font mb-3">The Extension That Became Legend</p>
            <div className="flex justify-center gap-2 flex-wrap">
              {["PRICE TRACKER", "PROFIT MAKER", "ALIEN TECH"].map((text, index) => (
                <Badge
                  key={index}
                  className="bg-[#2ddc58]/30 text-[#7efb74] border-[#2ddc58] pixel-font text-xs px-2 py-1"
                >
                  {text}
                </Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            What started as a simple Chrome extension for tracking crypto prices has evolved into something bigger. VEX
            represents the next phase - where utility meets speculation, where tracking becomes earning.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button
              className="bg-gradient-to-r from-[#7efb74] to-[#2ddc58] hover:from-[#2ddc58] hover:to-[#7efb74] text-black font-bold pixel-font px-6 py-3 shadow-[0_0_20px_#2ddc58] cursor-pointer"
              onClick={handleBuyClick}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              BUY VEX
            </Button>
            <Button
              variant="outline"
              className="border-[#2ddc58] text-[#2ddc58] bg-transparent hover:bg-[#2ddc58]/20 hover:border-[#7efb74] hover:text-[#7efb74] pixel-font px-6 py-3 cursor-pointer"
              onClick={handleViewChartClick}
            >
              View Chart
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 pixel-font text-[#7efb74]">THE VEX EVOLUTION</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Extension Origins",
                desc: "Started as a Chrome extension helping traders track prices across multiple exchanges",
              },
              {
                title: "Community Growth",
                desc: "Building a strong community of traders and crypto enthusiasts who will rely on VEX for their daily monitoring needs",
              },
              {
                title: "Token Evolution",
                desc: "Now expanding beyond tracking into the tokenized economy of decentralized finance",
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#0f1a0d] p-4 rounded-lg border border-[#2ddc58]/50">
                <h3 className="text-lg font-bold text-[#7efb74] mb-2 pixel-font">{item.title}</h3>
                <p className="text-sm text-[#a8d5ba]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#2ddc58]/20 to-[#7efb74]/20">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 pixel-font text-[#7efb74]">JOIN THE VEX COMMUNITY</h2>
          <p className="text-lg mb-6 text-[#2ddc58] pixel-font">Be part of the evolution</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              className="border-[#2ddc58] text-[#2ddc58] bg-transparent hover:bg-[#2ddc58]/20 hover:border-[#7efb74] hover:text-[#7efb74] pixel-font px-6 py-3"
            >
              Telegram
            </Button>
            <Button
              variant="outline"
              className="border-[#2ddc58] text-[#2ddc58] bg-transparent hover:bg-[#2ddc58]/20 hover:border-[#7efb74] hover:text-[#7efb74] pixel-font px-6 py-3"
            >
              Twitter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2ddc58]/30 bg-[#121a0e] py-6 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <div
                className="w-6 h-6"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon128-5ABOBgGYTwZ0j919mAmg0OcVBeK2Hf.png')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  imageRendering: "pixelated",
                  imageRendering: "-moz-crisp-edges",
                  imageRendering: "crisp-edges",
                  filter: "contrast(1.1) brightness(1.1)",
                }}
              ></div>
            </div>
          </div>
          <p className="text-xs text-[#a8d5ba] mb-1 pixel-font">© 2025 VEX Token. From extension to evolution.</p>
        </div>
      </footer>
    </div>
  )
}
