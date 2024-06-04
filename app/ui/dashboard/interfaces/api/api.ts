import { AlertResponseInterface, Data, LoginResponseInterface, Planes, RolesInterface } from "../userlist";
const base_url = 'localhost:3001';
export async function getPaginatedUsers({ order, page, perPage,roleId,search }: { order: string; page: number; perPage: number,roleId?:number,search?:string}): Promise<Data> {
    
    const res = await fetch(`http://${base_url}/user/users-whit-pagination?order=${order}&page=${page}&perPage=${perPage}&search=${search}`);
    const data = await res.json();
    return{
        data: data.data.data,
        pagination: data.data.pagination
    }
}

export async function CreateUser({userName,lastName,email,password,roleId}: {userName: string; lastName: string; email: string; password: string; roleId: string}):Promise<AlertResponseInterface> {
    const response = await fetch(`http://${base_url}/user/create`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            lastName: lastName,
            email: email,
            password: password,
            roleId: parseInt(roleId)
        })
    })

    const data = await response.json();
    return{
        message:data.message,
        code:data.codeStatus
    }
}

export async function getRoles():Promise<RolesInterface>{
    const res = await fetch(`http://${base_url}/role`);
    const data = await res.json();
    return {
        data:data.data
    }
}
export async function getPlans():Promise<Planes>{
    const res= await fetch(`http://${base_url}/plans`);
    const data = await res.json();

    return{
        data:data.data,
    }
    
}
export async function deleteUser({id}: {id: string}):Promise<AlertResponseInterface>{
    const response = await fetch(`http://${base_url}/user/delete${id}`,{
        method: 'DELETE',
    })
    const data = await response.json();
    return{
        message:data.message,
        code:data.codeStatus
    }
}

export async function updateUser({id,userName,lastName,email,password,roleId}: {id?: string; userName: string; lastName: string; email: string; password: string; roleId: string}):Promise<AlertResponseInterface>{
    const response = await fetch(`http://${base_url}/user/update/`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            name: userName,
            lastName: lastName,
            email: email,
            password: password,
            roleId: parseInt(roleId)
        })
    })
    const data = await response.json();
    return{
        message:data.message,
        code:data.codeStatus
    }
}

export async function validateLogin({email,password}: {email: string; password: string}):Promise<LoginResponseInterface>{
    const response = await fetch(`http://${base_url}/auth/signin`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    const data = await response.json();
    return{
        accessToken:data.accesToken,
        refreshToken:data.refreshToken
    }
}