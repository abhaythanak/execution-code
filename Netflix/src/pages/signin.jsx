import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Form } from "../components";
import { useState } from "react";


export default function Signin() {

    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    //check form input element are valid
    const isInvalid = password === '' || emailAddress === '';

    const handleSignin = (event) => {
        event.preventDefault();

        // firebase work here!
    };
    //email & password

    return(
        <>
         <HeaderContainer>
            <Form>
                <Form.Title>Sign In </Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input
                    placeholder= "Email address"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                    type="password"
                    placeholder= "Password"
                    autoComplete="off"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign In
                    </Form.Submit>
                </Form.Base>

                <Form.Text>
                    New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                </Form.Text>

                <Form.TextSmall>
                    This page is protected by Google reCAPTCH to ensure you're not a
                    bot. Learn more.
                </Form.TextSmall>
            </Form>
         </HeaderContainer>
         <FooterContainer/>
        </>
    ); 
}