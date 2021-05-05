import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SiginUpScreen.css';

function SiginUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null)


    const register = (e)=> {
     e.preventDefault();
    auth.createUserWithEmailAndPassword(

        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser)=> {
     console.log(authUser);

    }).catch(error=> {

        alert(error.message)
    })

    };
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value

        ).then((userAuth) => {
              console.log(userAuth);

        }).catch((error)=> {
            alert(error.message);
        })


    }
    return (
        <div className="siginupscreen">
            <form>
            <h1>Sigin In</h1>
            <input ref={emailRef} placeholder="Email" type="email"></input>
            <input ref={passwordRef} placeholder="Password" type='password'></input>
            
            <button onClick={signIn} type='submit'>Sigin In</button>
            <span className="siginupscreen__gray"></span>
            <h4>

            <span className="siginupscreen__gray">New to Netflix? </span>
            <span onClick={register} className="siginupscreen__link"> Sign Up now</span>
           
            </h4>
            </form>
        </div>
    )
}

export default SiginUpScreen
