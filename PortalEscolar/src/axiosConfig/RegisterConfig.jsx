import  axios from "axios";

export default async function Register (Email,senha){
    return new Promise((resolve,reject) =>{
        const Funciona = Email
        const papasword = senha
        axios.post("http://localhost:8080/api/Register", {
            e_mail: Funciona,
            senha: papasword
        })
        .then(function (reponse) {
            if(reponse.status == 201){
                resolve(true)
            }
            else{
                reject(false)
            }
        })
        .catch(function (error){
            console.log(error)
        })
    })
}

