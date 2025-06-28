<<<<<<< HEAD
# VEX Token Website - Live Data Integration

## 🚀 After pump.fun Launch Setup

### Step 1: Update Token Configuration
Edit `lib/config.ts`:

\`\`\`typescript
export const TOKEN_CONFIG = {
  // Add your token address from pump.fun
  address: "YOUR_TOKEN_ADDRESS_HERE",
  
  // Enable live data
  enableLiveData: true,
  
  // ... rest stays the same
}
\`\`\`

### Step 2: Install Dependencies
\`\`\`bash
npm install @solana/web3.js
\`\`\`

### Step 3: Deploy
The site will automatically start showing live data from:
- pump.fun API (market cap, liquidity)
- Solana blockchain (holders, supply)

## 🔧 Features

✅ **Live Data Integration**
- Market Cap from pump.fun
- Real holder count from Solana
- Liquidity tracking
- Supply burn tracking

✅ **Auto-Refresh**
- Updates every 30 seconds
- Loading indicators
- Error handling

✅ **Easy Configuration**
- Single file to update token address
- Toggle between static/live data
- Configurable refresh intervals

## 📊 Data Sources

- **pump.fun API**: Market cap, liquidity, metadata
- **Solana RPC**: Holder count, token supply
- **Fallback**: Static data when APIs fail

## 🎯 Usage

1. Launch token on pump.fun
2. Copy token address
3. Update `lib/config.ts`
4. Set `enableLiveData: true`
5. Deploy - Live data will start flowing!

## 🔄 Manual Refresh

Users can see live indicator in header and last update time below stats.
\`\`\`

Hazır! 🚀👽

**pump.fun'dan sonra yapman gerekenler:**

1. **Token adresini kopyala** pump.fun'dan
2. **`lib/config.ts`** dosyasında:
   - `address: "TOKEN_ADRESINI_BURAYA_YAZ"`
   - `enableLiveData: true` yap
3. **Deploy et** - Otomatik canlı veri akışı başlayacak!

**Özellikler:**
- ✅ pump.fun API entegrasyonu
- ✅ Solana blockchain bağlantısı  
- ✅ 30 saniyede bir otomatik güncelleme
- ✅ Loading göstergeleri
- ✅ Hata yönetimi
- ✅ Tek dosyadan kolay konfigürasyon

Şimdi token'ı çıkar, adresi yapıştır, canlı veriler akmaya başlasın! 🚀
=======
# vextracker
>>>>>>> 1aa9e62c5e40ea4944de888ee1e80e67125e7aa0
