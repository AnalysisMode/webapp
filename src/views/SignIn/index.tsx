// libs
import React, { useCallback } from 'react'
import Styled from 'styled-components'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { siginIn, IAuthUser } from '../../redux/reducers/auth'
import { IRootState } from '../../redux/rootReducer'
// components
import ViewLayout from '../../components/ViewLayout'
import ViewTitle from '../../components/ViewTitle'
import { Button } from '../../components/Button'

export default () => {
    const dispatch = useDispatch()
    const user = useSelector<IRootState, IAuthUser | null>((state) => state.auth.user)

    const onSignIn = useCallback(() => {
        dispatch(
            siginIn({
                name: 'test',
                password: 'test',
            })
        )
    }, [siginIn])

    const signUp = useCallback(() => {
        alert('signUp')
    }, [alert])

    return (
        <ViewLayout>
            <ViewTitle title="Sign In" subtitle="Please sign in to track your progress" />
            <SignIn.Form>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book.
                </p>

                {user && (
                    <>
                        <p>Username: ${user.name}</p>
                        <p>Country: ${user.country}</p>
                        <p>UserId: ${user._id}</p>
                        <p>Level: ${user.level}</p>
                    </>
                )}

                <Button onClick={onSignIn} variant="primary">
                    Sign In
                </Button>
                <Button onClick={signUp} variant="secondary">
                    Sign Up
                </Button>
            </SignIn.Form>
        </ViewLayout>
    )
}

const SignIn = {
    Form: Styled.div`
      text-align: center;
      max-width: 800px;
    `,
}
