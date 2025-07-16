'use client';

import React from 'react'
import style from './LogIn.module.css'
import {signUp} from './login'
import {signIn} from './login'


const Login = () => {
  return (
    <>
      <div className={`${style.signUp} ${style.transition} signUp`}>
        <div className={style.opposite}>
          <h1 className={style.titleO}>Welcome Back!</h1>
          <p className={style.descO}>To keep connected with us please login with your personal info</p>
          <button onClick={signIn} className={style.btnO}>SIGN IN</button>
        </div>
        <div className={style.notOpposite}>
          <h1 className={style.titleOP}>Create Account</h1>
          <div className={style.links}>
            <i className={`${style.icon} fa-brands fa-facebook-f`}></i>
            <i className={`${style.icon} fa-brands fa-google`}></i>
          </div>
          <p>or use your email for registration:</p>
          <div className={style.inputs}>
            <div className={style.inputEl}>
              <i className={` ${style.iconIn} fa-solid fa-user`}></i>
              <input className={style.input} type="text" placeholder='Name' />
            </div>
            <div className={style.inputEl}>
              <i className={` ${style.iconIn} fa-solid fa-envelope`}></i>
              <input className={style.input} type="email" placeholder='Email' />
            </div>
            <div className={style.inputEl}>
              <i className={` ${style.iconIn} fa-solid fa-lock`}></i>
              <input className={style.input} type="password" placeholder='Password' />
            </div>
          </div>
          <button type="submit" className={style.btnOP}>SIGN UP</button>
        </div>
      </div>
      <div className={`${style.hide} ${style.signIn} ${style.transition}  signIn`}>
        <div className={style.notOppositeTwo}>
          <h1 className={style.titleOPTwo}>Sign in</h1>
          <div className={style.links}>
            <i className={`${style.iconTwo} fa-brands fa-facebook-f`}></i>
            <i className={`${style.iconTwo} fa-brands fa-google`}></i>
          </div>
          <p>or use your email account:</p>
          <div className={style.inputsTwo}>
            <div className={style.inputEl}>
              <i className={` ${style.iconIn} fa-solid fa-envelope`}></i>
              <input className={style.inputTwo} type="email" placeholder='Email' />
            </div>
            <div className={style.inputEl}>
              <i className={` ${style.iconIn} fa-solid fa-lock`}></i>
              <input className={style.inputTwo} type="password" placeholder='Password' />
            </div>
          </div>
          <button type="submit" className={style.btnOPTwo}>SIGN IN</button>
        </div>
        <div className={style.oppositeTwo}>
            <h1 className={style.titleO}>Hello, Friend!</h1>
            <p className={style.descO}>Enter your personal details and start journey with us</p>
            <button onClick={signUp} className={style.btnOTwo}>SIGN UP</button>
        </div>
      </div>
    </>
  )
}

export default Login