// libs
import React, { useCallback } from 'react'
import Styled from 'styled-components'
// redux
import { useDispatch } from 'react-redux'
// utils
import axios from '../../utils/axiosInstance'
// components
import ViewLayout from '../../components/ViewLayout'
import ViewTitle from '../../components/ViewTitle'
import { Button } from '../../components/Button'

const API_URL = 'http://199.247.6.71:4000'

export default () => {
    const signIn = useCallback(() => {
        axios.post(API_URL + '/user/authenticate', {
            name: 'test',
            password: 'test',
        })
    }, [axios])

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
                <Button onClick={signIn} variant="primary">
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
