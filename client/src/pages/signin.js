import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';

export default function SignIn() {
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //check form input elements are valid 
  const isInvalid = password == '' || emailAddress == '';
  const handleSignin = (event) => {
    event.preventDefault();
    //firebase work here.
    firebase
    .auth()
    .signInWtihEmailAndPassword(emailAddress, password)
    .then(() => {
      //push to the browser page
    })
    .catch((error) => {
      setEmailAddress('');
      setPassword('');
      setError(errror.message);
    })
  };

  const isValid = true

  return (
    <>
      <HeaderContainer>       
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({target}) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={({target}) => setPassword(target.value)}
            />
            <Form.Submit disabled={isValid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This pages is protected by Google reCAPTHA to ensure your'e not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer/>
    </>
  );
}
