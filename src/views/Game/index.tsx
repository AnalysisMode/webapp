// libs
import React, { useEffect } from 'react'
import { navigate } from 'hookrouter'

export default () => {
    const skipped = localStorage.getItem('skipped-tutorial')

    useEffect(() => {
        if (!skipped || JSON.parse(skipped) === false) {
            navigate('/game-tutorial')
        }
    }, [skipped])

    return <div>Game</div>
}
