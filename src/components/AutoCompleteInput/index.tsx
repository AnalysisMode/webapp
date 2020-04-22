// libs
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
// components
import Input from '../Input'

type AutocompleteProps = {
    items: string[]
    onChange: (country: string) => void
}

type StateProp = {
    activeSuggestion: number
    filteredSuggestions: string[]
    showSuggestions: boolean
    userInput: string
}

enum KeyCodes {
    Enter = 13,
    ArrowUp = 38,
    ArrowDown = 40,
}

export default ({ items, onChange }: AutocompleteProps) => {
    const defaultState: StateProp = {
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: '',
    }

    const [state, setState] = useState<StateProp>(defaultState)

    useEffect(() => {
        onChange(state.userInput)
    }, [state, onChange])

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userInput = e.currentTarget.value

        const filteredItems = items.filter((i) => {
            return i.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        })

        setState({
            activeSuggestion: 0,
            filteredSuggestions: filteredItems,
            showSuggestions: true,
            userInput: userInput,
        })
    }

    const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText,
        })
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { activeSuggestion, filteredSuggestions } = state

        if (e.keyCode === KeyCodes.Enter) {
            setState({
                activeSuggestion: 0,
                showSuggestions: false,
                filteredSuggestions: filteredSuggestions,
                userInput: filteredSuggestions[activeSuggestion],
            })
        } else if (e.keyCode === KeyCodes.ArrowUp) {
            if (activeSuggestion === 0) {
                return
            }

            setState({
                ...state,
                activeSuggestion: activeSuggestion - 1,
            })
        } else if (e.keyCode === KeyCodes.ArrowDown) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return
            }

            setState({
                ...state,
                activeSuggestion: activeSuggestion + 1,
            })
        }
    }

    const suggestionsComponent = () => {
        if (state.showSuggestions && state.userInput) {
            if (state.filteredSuggestions.length > 0) {
                return (
                    <Suggestions.Layout>
                        <Suggestions.Suggestions>
                            {state.filteredSuggestions.map((suggestion, index) => {
                                if (index === state.activeSuggestion) {
                                    return (
                                        <Suggestions.ActiveSuggestion
                                            key={`suggestion-${suggestion}`}
                                            onClick={onClick}
                                        >
                                            {suggestion}
                                        </Suggestions.ActiveSuggestion>
                                    )
                                } else {
                                    return (
                                        <Suggestions.InactiveSuggestion
                                            key={`suggestion-${suggestion}`}
                                            onClick={onClick}
                                        >
                                            {suggestion}
                                        </Suggestions.InactiveSuggestion>
                                    )
                                }
                            })}
                        </Suggestions.Suggestions>
                    </Suggestions.Layout>
                )
            } else {
                return (
                    <Suggestions.Layout>
                        <Suggestions.NoSuggestions>
                            We don't know of a country with that name...
                        </Suggestions.NoSuggestions>
                    </Suggestions.Layout>
                )
            }
        }

        return null
    }

    return (
        <AutoComplete.Layout>
            <Input
                value={state.userInput}
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                onBlur={() => null}
                placeholder={'country'}
                key={`country-input`}
                type={'text'}
                width={400}
            />
            {suggestionsComponent()}
        </AutoComplete.Layout>
    )
}

const AutoComplete = {
    Layout: Styled.div`
        display: flex;
        flex-direction: column;
    `,
}

const Suggestions = {
    Layout: Styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 5px;
    `,
    NoSuggestions: Styled.div`
        color: ${(props) => props.theme.colors.main};
    `,
    Suggestions: Styled.ul`
        max-height: 150px;
        border: 2px solid ${(props) => props.theme.colors.main};
        border-top-width: 0;
        padding-left: 0;
        width: 400px;
        margin-top: 0;
        overflow-y: auto;
    `,
    InactiveSuggestion: Styled.li`
        list-style: none;
        display: flex;
        cursor: pointer;
        pointer-events: all;
    `,
    ActiveSuggestion: Styled.li`
        list-style: none;
        display: flex;
        cursor: pointer;
        pointer-events: all;
        background-color: ${(props) => props.theme.colors.primaryGreen};
    `,
}
