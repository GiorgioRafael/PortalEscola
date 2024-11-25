import  axios from "axios";

export default function xx (Email,senha){
    const Funciona = Email
    const papasword = senha
    axios.post("http://localhost:8080/api/SaveUsers", {
        e_mail: Funciona,
        senha: papasword
    })
    .then(function (reponse) {
        console.log(reponse)
    })
    .catch(function (error){
        console.log(error)
    })
}
