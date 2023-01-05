import React from 'react'
import GoogleLogin from 'react-google-login'

const clientId = '959593221954-mq3h3c5vnqiqpmc6up51ko5dl8nn2tke.apps.googleusercontent.com'

const LoginButtonGoogle = () => {

  const onSuccess = (res: any) => {
    console.log(res)
  }

  const onFailure = (res: any) => {
    console.log(res)
  }

  return (
    <div id='signInBtn'>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      {/*<button>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.72 12.7656C23.72 11.9369 23.6456 11.14 23.5075 10.375H12.5V14.8959H18.79C18.5191 16.3569 17.6956 17.5947 16.4578 18.4234V21.356H20.235C22.445 19.3213 23.72 16.325 23.72 12.7656Z" fill="#4285F4"/>
                    <path d="M12.5001 24.1876C15.6557 24.1876 18.3013 23.141 20.2351 21.356L16.4579 18.4235C15.4113 19.1248 14.0726 19.5391 12.5001 19.5391C9.45599 19.5391 6.87942 17.4832 5.96036 14.7207H2.05566V17.7488C3.97879 21.5685 7.9313 24.1876 12.5001 24.1876Z" fill="#34A853"/>
                    <path d="M5.96032 14.7204C5.72657 14.0191 5.59376 13.27 5.59376 12.4997C5.59376 11.7294 5.72657 10.9804 5.96032 10.2791V7.25098H2.05563C1.26406 8.82879 0.8125 10.6138 0.8125 12.4997C0.8125 14.3857 1.26406 16.1707 2.05563 17.7485L5.96032 14.7204Z" fill="#FBBC05"/>
                    <path d="M12.5001 5.46095C14.216 5.46095 15.7566 6.05063 16.9679 7.20876L20.3201 3.85657C18.296 1.97063 15.6504 0.8125 12.5001 0.8125C7.9313 0.8125 3.97879 3.43157 2.05566 7.25126L5.96036 10.2794C6.87942 7.51689 9.45599 5.46095 12.5001 5.46095Z" fill="#EA4335"/>
                </svg>
                Google
            </button>*/}
    </div>
  )
}

export default LoginButtonGoogle