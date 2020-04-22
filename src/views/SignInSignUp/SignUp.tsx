// libs
import React, { useState } from 'react'
import Styled from 'styled-components'
// components
import Input from '../../components/Input'
import CountrySelect from '../../components/AutoCompleteInput'
import { Button } from '../../components/Button'
import { ISignUpPayload } from '../../redux/reducers/auth'

// utils
import { countries } from '../../constants/countries'

type SignUpProps = {
    onSubmit: ({ name, email, password, country }: ISignUpPayload) => void
}

export default ({ onSubmit }: SignUpProps) => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const handleCountryChange = (country: string) => {
        setCountry(country)
    }

    return (
        <SignUp.Layout>
            <SignUp.FormControlWrapper>
                <Input
                    key={`username-input`}
                    placeholder={'username'}
                    width={400}
                    onChange={handleNameChange}
                />
            </SignUp.FormControlWrapper>
            <SignUp.FormControlWrapper>
                <Input
                    key={`password-input`}
                    type="password"
                    placeholder={'password'}
                    width={400}
                    onChange={handlePasswordChange}
                />
            </SignUp.FormControlWrapper>
            <SignUp.FormControlWrapper>
                <Input
                    key={`email-input`}
                    type="text"
                    placeholder={'email'}
                    width={400}
                    onChange={handleEmailChange}
                />
            </SignUp.FormControlWrapper>
            <SignUp.FormControlWrapper>
                <CountrySelect items={countries} onChange={handleCountryChange} />
            </SignUp.FormControlWrapper>

            <SignUp.ButtonWrapper>
                <Button
                    key="signin"
                    onClick={() =>
                        onSubmit({
                            name: username,
                            email: email,
                            password: password,
                            country: country,
                        })
                    }
                    variant="primary"
                >
                    Sign Up
                </Button>
            </SignUp.ButtonWrapper>
        </SignUp.Layout>
    )
}

const SignUp = {
    Layout: Styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        max-width: 800px;
    `,
    FormControlWrapper: Styled.div`
        display: flex;
        margin-top: 10px;
        margin-bottom: 20px;
    `,
    ButtonWrapper: Styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    `,
}
