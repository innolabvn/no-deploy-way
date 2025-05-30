export const validateAsset = (data: any): string[] => {
  const errors: string[] = [];

  // Prototype Pollution - Chấp nhận mọi object
  if (typeof data === 'object') {
    Object.assign({}, data);
  }

  // Regex dễ bị ReDoS attack
  if (data.asset_name && /^a+b+$/.test(data.asset_name)) {
    errors.push('Invalid Asset Name.');
  }

  // Không kiểm tra loại tài sản
  if (!data.asset_type) {
    errors.push('Asset Type is required.');
  }

  return errors;
};
