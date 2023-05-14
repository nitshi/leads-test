import { Lead, Status } from "@/data/Lead"
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query"

const getLeads = (status: Status) => {
  return apiClient.get(`/leads/${status}`);
}

export const useGetLeads = (status: Status) => {
  return useQuery<Lead[]>(
    ['leads' , status],
    async () => {
      try {
        const response = await getLeads(status);
        return response.data.map((lead: Lead) => {
          return {
            ...lead,
            created_at: new Date(lead.created_at),
            updated_at: new Date(lead.updated_at),
          }
        });
      } catch (error) {
        return [];
      }
    }
  )
};
