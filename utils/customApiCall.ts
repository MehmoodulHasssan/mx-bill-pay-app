import axios, { AxiosResponse } from 'axios';
import { useAppSelector } from '@/store/slices/authSlice';

export const apiCall = async (
  url: string,
  method: string,
  data?: any,
  token?: string
) => {
  let headers;
  headers = {
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  };

  if (data && data instanceof FormData) {
    headers['Content-Type'] = 'multipart/form-data';
  }

  try {
    let response: AxiosResponse | undefined;
    switch (method) {
      case 'GET':
        response = await axios.get(url, { headers });
        break;
      case 'POST':
        response = await axios.post(url, data, { headers });
        break;
      case 'PUT':
        response = await axios.put(url, data, { headers });
        break;
      case 'DELETE':
        response = await axios.delete(url, { headers });
        break;
      default:
        throw new Error('Unsupported HTTP method');
    }

    return response?.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.message || 'Something went wrong');
    } else {
      throw new Error('Network or server error occurred');
    }
  }
};
