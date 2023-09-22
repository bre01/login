
export  default async function SignUp(url,body){
    response=fetch(url,{
        method:'POST',
        headers:{
            'Accept':'application/json',
        },
        mode:'cors',
        body:JSON.stringify({...body})
    })
    const content=await response.json();
    if(content.code===404){
        ShowReason("can not connect to server");
    }
    else if(content.code=200){
        GoToHomePage();
    }
    else{
        ShowReason(content.response) 
    }
}