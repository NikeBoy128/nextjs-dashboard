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
