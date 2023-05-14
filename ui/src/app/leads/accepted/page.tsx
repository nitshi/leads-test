'use client';

import { Status } from "@/data/Lead";
import { useGetLeads } from "@/hooks/useGetLeads.hook";
import { LeadCard } from "../components/Lead";

export default function AcceptedLeadsPage() {
    const { data: leads, isLoading } = useGetLeads(Status.ACCEPTED);

    if (isLoading) {
        return (
        <div className="flex items-center justify-center h-screen">
            Loading...
        </div>
        )
    }

    if(leads?.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                No accepted leads found
            </div>
        )
    }
    
    return (
        <div className="px-4 py-6">
            {leads?.map((lead) => (
                <LeadCard lead={lead} key={lead.id}/>
            ))}
        </div>
    )
}
