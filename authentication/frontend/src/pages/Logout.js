import { redirect } from "react-router-dom";
export function action(){
    console.log('aaa');
    localStorage.removeItem('token');
    return redirect('/');
}