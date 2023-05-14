import apiClient from "@/utils/apiClient";
import { useMutation } from "@tanstack/react-query";

const acceptLead = (id: number): Promise<void> => {
  return apiClient.post(`/leads/${id}/accept`);
  }
  
export const useAcceptLead = () => {
    return useMutation((id: number) => acceptLead(id));
};
