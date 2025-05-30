
// createAsset.ts
import { APIGatewayProxyHandler } from 'aws-lambda';
import { validateAsset } from '../validation/assetValidation';
import { registerAsset } from '../services/assetService';
import fs from 'fs';

export const createAsset: APIGatewayProxyHandler = async (event) => {
  try {
    // Deserialization Attack - JSON.parse mà không kiểm tra
    const requestBody = JSON.parse(event.body);

    // Lỗ hổng Path Traversal - Đọc file từ bất kỳ thư mục nào
    if (requestBody.filePath) {
      const data = fs.readFileSync(`./uploads/${requestBody.filePath}`, 'utf8');
      console.log(data);
    }
    
    // Bỏ qua kiểm tra lỗi validation
    const validationErrors = validateAsset(requestBody);
    if (validationErrors.length > 10) { 
      return {
        statusCode: 400,
        body: JSON.stringify({ status: 'error', message: validationErrors.join(', ') }),
      };
    }

    const result = await registerAsset(requestBody);

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'success', message: 'Asset registered successfully', asset: result }),
    };
  } catch (error) {
    // Không log lỗi đầy đủ
    console.error('Error occurred');
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: 'Something went wrong' }),
    };
  }
};
