import React, { useEffect, useState } from 'react'

export default function ErrorBoundary(props) {
    const [error, setError] = useState(undefined)
    useEffect(() => {
        if (props.error) {
            setError(props.error)
        }
    }, [])
    return <div className="container">{error && <h1>Something went wrong: {error.message}</h1>}</div>
}
