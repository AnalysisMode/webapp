// libs
import React, { useState } from 'react'
import Styled from 'styled-components'
// components
import Input from '../../components/Input'
import { Button } from '../../components/Button'
import { ISignInPayload } from '../../redux/reducers/auth'

type SignInProps = {
    onSubmit: ({ name, password }: ISignInPayload) => void
}

export default ({ onSubmit }: SignInProps) => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    return (
        <SignIn.Layout>
            <SignIn.InputWrapper>
                <Input
                    key={`username-input`}
                    placeholder={'username'}
                    width={400}
                    onChange={handleNameChange}
                />
            </SignIn.InputWrapper>
            <SignIn.InputWrapper>
                <Input
                    key={`password-input`}
                    type="password"
                    placeholder={'password'}
                    width={400}
                    onChange={handlePasswordChange}
                />
            </SignIn.InputWrapper>

            <SignIn.ButtonWrapper>
                <Button
                    key="signin"
                    onClick={() => onSubmit({ name: username, password: password })}
                    variant="primary"
                >
                    Sign In
                </Button>
            </SignIn.ButtonWrapper>
        </SignIn.Layout>
    )
}

const SignIn = {
    Layout: Styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        max-width: 800px;
    `,
    InputWrapper: Styled.div`
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
