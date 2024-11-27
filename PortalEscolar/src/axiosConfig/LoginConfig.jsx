import axios from "axios"


export default function Login (Email,senha){
  return new Promise((resolve, reject) => {
    const Funciona = Email
    const papasword = senha
    axios.post("http://localhost:8080/api/Login", {
        e_mail: Funciona,
        senha: papasword
    })
    .then(function (reponse) {
        if(reponse.status == 202){
            resolve(true)
        }
        else {
            reject(false)
        }
       
       
    })
    .catch(function (error){
        console.log(error)
    })
  })
    
}
