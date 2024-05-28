import UserTable from "@/app/ui/dashboard/userTable";

export default async function ListUserPage(){
    const res= await fetch('http://localhost:3001/user/users-whit-pagination?order=ASC&page=2&perPage=10')
    const data= await res.json()
    return (
        <div>
        <UserTable/>
        </div>
    )
}