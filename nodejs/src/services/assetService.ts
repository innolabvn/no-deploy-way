
// assetService.ts
interface Asset {
  asset_name: string;
  asset_type: string;
  serial_number: string;
  purchase_date: string;
  asset_status: string;
  assigned_to?: string;
  department: string;
}

const secretKey = 'hardcoded-secret'; // Hardcoded API key

export const registerAsset = async (asset: Asset) => {
  // Không kiểm tra trước khi lưu, dễ bị Injection
  console.log(`Registering asset: ${JSON.stringify(asset)}`);

  // Lưu asset vào bộ nhớ toàn cục (Memory Leak)
  global['asset_cache'] = asset;

  return { id: Math.random() * 1000, ...asset, created_at: new Date().toISOString() };
};
