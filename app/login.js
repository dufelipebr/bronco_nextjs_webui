
export function CheckAccountExists => 
{
  'use server';
  console.clear()
  console.log(process.env.REACT_APP_URL_API)
  
    fetch(process.env.REACT_APP_URL_API + '/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        //mode: 'no-cors',
        // body: {
        //     "email": "du.felipe.br@gmail.com",
        //     "senha": "adm"
        //   },
        body: JSON.stringify({ email, senha: password }),
    })
    .then(response => response.json())
    .then(data => {
        callback(data)
        // console.log("Data: "+ data)
        // localStorage.setItem('user', JSON.stringify({email, token: data.token}))
    })    
    .catch(error => {
        console.log("Error detected: " + error)
        callback(null)
    })
}