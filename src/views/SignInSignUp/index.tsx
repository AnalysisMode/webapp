// libs
import React, { useCallback, useState, useEffect } from 'react'
import { navigate } from 'hookrouter'
import Styled from 'styled-components'
// redux
import { useDispatch, useSelector } from 'react-redux'
import {
    signIn,
    IAuthUser,
    ISignInPayload,
    ISignUpPayload,
    signUp,
    IAuthState,
} from '../../redux/reducers/auth'
import { IRootState } from '../../redux/rootReducer'
// components
import ViewLayout from '../../components/ViewLayout'
import ViewTitle from '../../components/ViewTitle'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Button } from '../../components/Button'

enum TabActive {
    SignUp = 0,
    SignIn = 1,
}

export default () => {
    const dispatch = useDispatch()
    const [tabActive, setActiveTab] = useState(TabActive.SignUp)
    const authState = useSelector<IRootState, IAuthState>((state) => state.auth)

    const onSignIn = useCallback(
        ({ name, password }: ISignInPayload) => {
            dispatch(
                signIn({
                    name: name,
                    password: password,
                })
            )
        },
        [dispatch]
    )

    const onSignUp = useCallback(
        ({ name, email, password, country }: ISignUpPayload) => {
            dispatch(
                signUp({
                    name: name,
                    email: email,
                    password: password,
                    country: country,
                })
            )
        },
        [dispatch]
    )

    useEffect(() => {
        if (authState.registered) {
            setActiveTab(TabActive.SignIn)
        }
    }, [authState.registered])

    useEffect(() => {
        if (authState.user) {
            navigate('/game')
        }
    }, [authState.user])

    return (
        <SignInSignUp.Layout>
            <ViewTitle
                title={tabActive === TabActive.SignUp ? 'Sign Up' : 'Sign In'}
                subtitle="Please sign up to track your progress"
            />
            <SignInSignUp.TabWrapper>
                {tabActive === TabActive.SignUp && <SignUp onSubmit={onSignUp} />}
                {tabActive === TabActive.SignIn && <SignIn key={'sign-in'} onSubmit={onSignIn} />}
            </SignInSignUp.TabWrapper>

            {tabActive === TabActive.SignUp && (
                <SignInSignUp.AccountAlready>
                    Or have an account already? Click{' '}
                    <SignInSignUp.Link onClick={() => setActiveTab(TabActive.SignIn)}>
                        here
                    </SignInSignUp.Link>
                </SignInSignUp.AccountAlready>
            )}

            {/* <Button onClick={onSignIn} variant="primary">
                    Sign In
                </Button>
                <Button onClick={signUp} variant="secondary">
                    Sign Up
                </Button> */}
        </SignInSignUp.Layout>
    )
}

const SignInSignUp = {
    Layout: Styled.div`
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        align-items: center;
        background-repeat: no-repeat;
        background-position: center center;
    `,
    TabWrapper: Styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    `,
    AccountAlready: Styled.span`
        margin-top: 20px;
        display: flex;
        font-size: ${(props) => props.theme.font.size.smallest};

    `,
    Link: Styled.span`
        color: ${(props) => props.theme.colors.main};
        font-weight: bold;
        margin-left: 5px;
        cursor: pointer;
    `,
}
