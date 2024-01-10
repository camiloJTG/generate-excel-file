import { AccessToken, SelectionProcess } from '../interfaces';

const BASE_URL = process.env.RANKMI_API_BASE_URL;

export const getAccessToken = async () => {
   try {
      const params = new URLSearchParams({
         uid: process.env.RANKMI_API_AUTH_UID!,
         secretKey: process.env.RANKMI_API_AUTH_SECRET!
      });

      const resp = await fetch(`${BASE_URL}/v1/auth?${params}`, {
         method: 'POST'
      });

      const { data }: AccessToken = await resp.json();
      if (resp.ok && data) return data;
   } catch (error: any) {
      console.error(error.message);
      throw new error(error.message);
   }
};

export const getSelectionProcess = async (
   page: string,
   pageSize: string,
   status: string,
   token: string
) => {
   try {
      const params = new URLSearchParams({ page, pageSize, status });
      const resp = await fetch(
         `${BASE_URL}/v1/ats/selection_processes?${params}`
      );
      const { data }: SelectionProcess = await resp.json();
      if (resp.ok && data) return data.data;
   } catch (error: any) {
      console.error(error.message);
      throw new Error(error.message);
   }
};
