import { MapPinIcon, BriefcaseIcon, ClipboardDocumentIcon, BanknotesIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Lead, Status } from "@/data/Lead";
import { useAcceptLead } from '@/hooks/useAcceptLead.hook';
import { useDeclineLead } from '@/hooks/useDeclineLead.hook';

export function LeadCard({ lead }: { lead: Lead }) {
    const { mutate: acceptLead, isLoading: isAccepting } = useAcceptLead();
    const { mutate: declineLead, isLoading: isDeclining } = useDeclineLead();

    const onAccept = () => {
        acceptLead(lead.id, {
            onSuccess: () => {
                window.location.reload();
            }
        })
    }

    const onDecline = () => {
        declineLead(lead.id, {
            onSuccess: () => {
                window.location.reload();
            }
        })
    }

    return (
        <div className="border border-gray-200 bg-white px-4 py-4 sm:px-6 shadow overflow-hidden sm:rounded-lg mb-4">
            <div className="flex items-center">
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{lead.contact_name[0]}</span>
                </div>
                <div className="ml-4">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">{lead.contact_name}</h3>
                    <p className="text-sm text-gray-500">
                        {lead.created_at.toDateString()} @ {lead.created_at.toLocaleTimeString()}
                    </p>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="py-4 space-y-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 sm:space-y-0">
                        <div className="flex items-center text-sm text-gray-500">
                            <MapPinIcon className="h-5 w-5 mr-1"/>
                            {lead.suburb.name} {lead.suburb.postcode}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                            <BriefcaseIcon className="h-5 w-5 mr-1"/>
                            {lead.category.name}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                            <ClipboardDocumentIcon className="h-5 w-5 mr-1"/>
                            Job ID: {lead.id}
                        </div>
                        {lead.price && <div className="flex items-center text-sm text-gray-500">
                            <BanknotesIcon className="h-5 w-5 mr-1"/>
                            ${lead.price } Lead Invitation
                        </div>}
                    </div>
                    <div className="py-4">
                        {lead.contact_phone && <div className="mb-2 space-y-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 sm:space-y-0">
                            <div className="flex items-center text-sm text-orange-500">
                                <BanknotesIcon className="h-5 w-5 mr-1"/>
                                {lead.contact_phone}
                            </div>
                            <div className="flex items-center text-sm text-orange-500">
                                <EnvelopeIcon className="h-5 w-5 mr-1"/>
                                {lead.contact_email}
                            </div>
                        </div>}
                        <p className="text-sm leading-6 text-gray-700">{lead.description}</p>
                    </div>
                    { lead.status === Status.NEW && <div className="py-4 space-y-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 sm:space-y-0">
                        <button
                            type="button"
                            onClick={onAccept}
                            disabled={isAccepting}
                            className={`${isAccepting && 'bg-orange-200'} inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600`}>
                            { isAccepting ? 'Accepting...' : 'Accept'}
                        </button>
                        <button
                            type="button"
                            onClick={onDecline}
                            disabled={isDeclining}
                            className={`${isDeclining && 'bg-gray-200'} inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}>
                            { isDeclining ? 'Declining...' : 'Decline'}
                        </button>
                    </div>}
                </dl>
            
            </div>
        </div>
    )
}