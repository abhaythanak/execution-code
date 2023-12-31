import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Form } from "../components";
import { useState } from "react";

export default function Signup() {

    const [firstName, setFirstName] = useState()
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

       // do firebase stuff here
    }

    return(
        <>
          <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input
                      placeholder="First name"
                      value={firstName}
                      onChange={({ target }) => setFirstName(target.value)}
                    />
                    <Form.Input
                      placeholder="EmailAddress"
                      value={emailAddress}
                      onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up
                    </Form.Submit>

                    <Form.Text>
                        Already a user? <Form.Link to='/signin'>Sign in now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. Learn more.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
          </HeaderContainer>
          <FooterContainer/>
        </>
    )
}
