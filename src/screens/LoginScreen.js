import React, { useState } from 'react'
import './LoginScreen.css'
import SiginUpScreen from './SiginUpScreen';

function LoginScreen() {
  const [SiginIn, setSiginIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
              <img className="loginScreen__logo"
               src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""></img>
                 <button onClick={() => setSiginIn(true)} className="loginScreen__button"> Sigin-in</button>
               <div className="loginScreen__gradient">  
               </div>

               <div className="loginScreen__body">
                  { 
                 SiginIn ? (

                      <SiginUpScreen />
                ) : 
                (
                  <>
                 <h1>Unlimited films, TV programe and more.</h1>
                <h2>Watch anywhere ,cancel any time</h2>
                <h3>Ready to watch ,Enter uyour Email to create or restart your membership</h3>
                <div className="loginScreen__input">
                     <form>
                    <input type="email" placeholder="Email Address"></input>
                    <button onClick={()=> setSiginIn(true)} className="loginScreen__getStarted">GET STARTED</button>
                    
                    </form>
                      </div>
                
                    </>
)
                 }
               </div>
            </div>
    
        </div>
    )
}

export default LoginScreen
