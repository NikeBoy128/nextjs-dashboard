import { Data } from "../userlist";

export async function getPaginatedUsers({ order, page, perPage,roleId,search }: { order: string; page: number; perPage: number,roleId?:number,search?:string}): Promise<Data> {
    
    const res = await fetch(`http://localhost:3001/user/users-whit-pagination?order=${order}&page=${page}&perPage=${perPage}&search=${search}`);
    const data = await res.json();
    return{
        data: data.data.data,
        pagination: data.data.pagination
    }
}