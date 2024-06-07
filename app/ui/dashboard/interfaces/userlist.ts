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

export interface RolesInterface{
    data: getRolesInterface[];
}

export interface getRolesInterface {
    id:   string;
    name: string;
}
export interface UserFormInterface {
    id?:string
    userName: string;
    lastName: string;
    email: string;
    password: string;
    roleId: string;
  }
export interface AlertResponseInterface{
    message:string,
    code:number
}

export interface Planes {
    data: PlanesInterface[];
}

export interface PlanesInterface {
    id:          string;
    name:        string;
    price:       string;
    description: string;
    image:       string;
}
export interface LoginInterface{
    email:string,
    password:string
}
export interface LoginResponseInterface{
    accessToken:string,
    refreshToken:string,
}

export interface BenefitsResponse {
    data: BenefitInterface[];
}

export interface BenefitInterface {
    id:          string;
    description: string;
    status:      boolean;
}





export interface ResponsePaginationInscription {
    data:       InscripcionInterface[];
    pagination: Pagination;
}

export interface InscripcionInterface {
    id:           string;
    userId:       string;
    planId:       string;
    registerDate: Date;
    createdAt:    null;
    updatedAt:    null;
    deletedAt:    null;
    user:         User;
    plan:         Plan;
}

export interface Plan {
    id:          string;
    name:        string;
    price:       string;
    description: string;
    image:       string;
}

export interface User {
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
}

export interface Pagination {
    page:            string;
    perPage:         string;
    total:           number;
    pageCount:       number;
    hasPreviousPage: boolean;
    hasNextPage:     boolean;
}