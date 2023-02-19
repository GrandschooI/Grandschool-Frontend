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
    </div>
  )
}

export default LoginButtonGoogle