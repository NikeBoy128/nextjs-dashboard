export interface Data {
    data:       Datum[];
    pagination: Pagination;
}

export interface Datum {
    id:        string;
    name:      string;
    lastName:  string;
    avatarUrl: string;
    email:     string;
    roleId:    string;
    password:  string;
    isActive:  boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
    role:      Role;
}

export interface Role {
    id:   string;
    name: string;
}

export interface Pagination {
    page:            string;
    perPage:         string;
    total:           number;
    pageCount:       number;
    hasPreviousPage: boolean;
    hasNextPage:     boolean;
}