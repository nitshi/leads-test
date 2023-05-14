import apiClient from "@/utils/apiClient";
import { useMutation } from "@tanstack/react-query";

const declineLead = (id: number): Promise<void> => {
  return apiClient.post(`/leads/${id}/decline`);
  }
  
export const useDeclineLead = () => {
    return useMutation((id: number) => declineLead(id));
};
