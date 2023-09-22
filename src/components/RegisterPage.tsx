import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {
    const userNameRef=useRef();
    const contactRef=useRef();
    const passwordRef=useRef();  

    const onSubmitFunction=e=>{
        e.preventeDefault();
        const userName=userNameRef.current.value;
        const contact=contactRef.current.value;
        const password=passwordRef.current.value;
        const [type,ok,problem]=VerifyInfo(userName,contact);
        useState()
        if(ok){
            RequestCode(userName,contact,type);
        }
        else{
            showProblem(problem);
        }
        //only need username and email 
        
    }
    const  VerifyInfo=(userName:string,contact:string):[string,boolean,string]=>{
        

        

        return ["EMAIL",True,null];
    }


    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home" onSubmit={onSubmitFunction}>
                <p>
                    <label>Username</label><br/>
                    <input ref={userNameRef}type="text" name="first_name" required />
                </p>
                <p>
                    <label placeholder='email'>{promble}</label><br/>
                    <input ref={contactRef} type="text" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input ref={passwordRef} type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
