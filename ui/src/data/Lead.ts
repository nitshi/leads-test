interface Suburb {
    id: number;
    name: string;
    postcode: string;
}

interface Category {
    id: number;
    name: string;
    parent?: Category;
}

export enum Status {
    NEW = 'new',
    ACCEPTED = 'accepted',
}

export interface Lead {
    id: number;
    status: string;
    suburb: Suburb;
    category: Category;
    contact_name: string;
    contact_phone?: string;
    contact_email?: string;
    price?: number;
    description: string;
    created_at: Date;
    updated_at: Date;
}