import { Data } from "../userlist";
const base_url = '10.10.10.3:3001';
export async function getPaginatedUsers({ order, page, perPage,roleId,search }: { order: string; page: number; perPage: number,roleId?:number,search?:string}): Promise<Data> {
    
    const res = await fetch(`http://${base_url}/user/users-whit-pagination?order=${order}&page=${page}&perPage=${perPage}&search=${search}`);
    const data = await res.json();
    return{
        data: data.data.data,
        pagination: data.data.pagination
    }
}