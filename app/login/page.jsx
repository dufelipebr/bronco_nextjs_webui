'use client';

//import { redirect } from 'next/dist/server/api-utils';
import React, { useState } from 'react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Page() 
{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorValidation, setErrorValidation] = useState('')
    const [loggedIn, setLoggedIn] = useState('false')
    //const [passwordError, setPasswordError] = useState('')
    console.log('REACT_APP_URL_API')
    console.log(process.env.REACT_APP_URL_API)
    //const navigate = useNavigate()
    if (loggedIn == true)
    {
        //console.log('usuario logado' + loggedIn)
       const router = useRouter()
       router.push("/dashboard")
    }

    const onButtonClick = () => 
    {
        console.log('testing')
        console.log(email)
        console.log(password)

        setErrorValidation('')
        

        // Check if the user has entered both fields correctly
        if ('' === email) {
            setErrorValidation('Please enter your email')
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setErrorValidation('Please enter a valid email')
            return
        }

        if ('' === password) {
            setErrorValidation('Please enter a password')
            return
        }

        // if (password.length < 7) {
        //     setErrorValidation('The password must be 8 characters or longer')
        //     return
        // }

        //console.log('checkAccountExists')
        checkAccountExists((accountExists) => 
        {
            console.log('checkAccountExists')
            console.log(accountExists)
            // If yes, log in
            if (accountExists.token != null) 
            {
                localStorage.setItem('user', JSON.stringify({email, token: accountExists.token}))
                setLoggedIn(true)
             //navigate('/')
               
                //this.props.history.push('/dashboard')
            }
            else
            {
                setLoggedIn(false)
                setErrorValidation('An account does not exist with this email address')
                console.log('não encontrou o user')
            }
          })

    }


    const checkAccountExists = (callback) => 
    {
        fetch('/login', {
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

    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome to Bronco Broker CLI
              - {loggedIn} - 
              {process.env.NODE_ENV} - 
              {process.env.REACT_APP_URL_API}  
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                   value={password}
                   onChange={(ev) => setPassword(ev.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            <div className="font-semibold text-indigo-600 hover:text-indigo-500">
                <label className="errorLabel">{errorValidation}</label>
            </div>
              <div>
                <button
                  type="button" onClick={onButtonClick}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  