import axios from 'axios';
import { apiCall } from '../customApiCall';
import { API_ENDPOINTS } from '@/apiConfig';

export const getUserProfile = async (
  token: string
): Promise<IUserProfileResponse> => {
  return await apiCall(
    API_ENDPOINTS.ACCOUNT_MANAGEMENT.GetUserProfileData,
    'GET',
    undefined,
    token
  );
};

export const getUnreadNotifications = async (
  token: string
): Promise<INotificationsResponse> => {
  return await apiCall(
    API_ENDPOINTS.ACCOUNT_MANAGEMENT.GetNotifications,
    'GET',
    undefined,
    token
  );
};
export const markAllRead=async(token:string)=>{
  return await apiCall(
    API_ENDPOINTS.ACCOUNT_MANAGEMENT.markAllNotificationsAsRead,
    'GET',
    undefined,
    token
  );
}

export const checkBvnStatus = async (
  token: string
): Promise<{ status: 'active' | 'pending' }> => {
  return await apiCall(
    API_ENDPOINTS.AUTH.CheckBvnStatus,
    'GET',
    undefined,
    token
  );
};
export const verifyBvnStatus = async (
  token: string
): Promise<{ status: 'checked' | 'unchecked' }> => {
  return await apiCall(
    API_ENDPOINTS.AUTH.CheckBvnVerified,
    'GET',
    undefined,
    token
  );
};

export const getBillPaymentHistory = async (
  token: string
): Promise<IBillTransactionResponse> => {
  return await apiCall(
    API_ENDPOINTS.ACCOUNT_MANAGEMENT.GetBillPaymentHistory,
    'GET',
    undefined,
    token
  );
};
export const getTransferHistory = async (
  token: string
): Promise<ITransferTransactionResponse> => {
  return await apiCall(
    API_ENDPOINTS.ACCOUNT_MANAGEMENT.GetTransferHistory,
    'GET',
    undefined,
    token
  );
};
export const generateBvnLinkAgain = async ({
  token,
}: {
 
  token: string;
}) => {
  return await apiCall(
    API_ENDPOINTS.ACCOUNT_MANAGEMENT.RequestBvnConsent,
    'POST',
undefined,
    token
  );
};
interface IUserProfileResponse {
  status: string;
  data: IUserProfileData;
}

export interface IUserProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  profilPicture: string | null;
  gender: string | null;
  occupation: string | null;
  dob: string | null;
  email: string;
}
// export interface IUserProfileData {
//   id: number;
//   user_id: number;
//   account_number: string;
//   profile_picture: string;
//   account_type: string;
//   status: string;
//   bvn: string;
//   created_at: string;
//   updated_at: string;
//   firstName: string;
//   lastName: string;
//   phone: string;
//   accountBalance: string;
//   accountId: string;
//   client: string;
//   clientId: string;
//   savingsProductName: string;
//   nickName: string | null;
//   gender: string | null;
//   occupation: string | null;
//   user: User;
// }

interface User {
  id: number;
  email: string;
  email_verified_at: string | null;
  otp: string | null;
  otp_verified: number;
  created_at: string;
  updated_at: string;
}

interface INotification {
  id: number;
  user_id: number;
  title: string;
  message: string;
  type: string;
  read: number;
  created_at: string;
  updated_at: string;
  icon: string;
  iconColor: string;
}
interface INotificationsResponse {
  status: string;
  message: string;
  data: INotification[];
}

export type ITrasnferTransaction = {
  transaction_id: number;
  amount: string;
  user_id: number;
  transaction_type: 'inter' | 'intra';
  transaction_date: string; // ISO date format
  sign: 'negative' | 'positive';
  status: 'Completed' | 'Pending' | 'Failed'; // Expandable if there are more statuses
  from_account_number: string;
  to_account_number: string;
  from_client_id: string;
  to_client_id: string;
  to_client_name: string;
  from_client_name: string;
  response_message: string | null;
  type: string | null;
};

type ITransferTransactionResponse = {
  status: 'success' | 'error';
  data: ITrasnferTransaction[];
};

export interface IBillTransaction {
  id: number;
  amount: string;
  user_id: number;
  transaction_type: string;
  transaction_date: string;
  refference: string;
  customerId: string;
  sign: 'negative' | 'positive';
  status: 'completed' | 'pending' | 'failed'; // Add more statuses if applicable
  category: string;
  paymentitemname: string;
  billerType: string;
  payDirectitemCode: string;
  currencyCode: string;
  division: string;
  created_at: string; // ISO date format
  billerId: string;
  category_icon: string;
  iconColor: string; // RGBA format
}

interface IBillTransactionResponse {
  status: 'success' | 'error';
  data: IBillTransaction[];
}
