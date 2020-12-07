import React, { useEffect, useState } from 'react'
import { fetchUser } from './../../services/user.service'
import { makeStyles } from '@material-ui/core/styles'
import unicorn from '../../assets/unicorn.png'
import Tweet from '../Tweet/Tweet'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'


const createStyles = makeStyles((theme) => ({
    textField: {
        display: 'inline-block',
        wordSpacing: '10px',
    },
    image: {
        width: '20%',
    },
    container: {
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

export default function Profile(props) {
    const classes = createStyles()
    const [user, setUser] = useState(undefined)
    const [tweets, setTweets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        async function getUser() {
            try {
                const { username } = props.match.params
                const result = await fetchUser(username)
                setUser(result.data.user)
                setTweets(result.data.tweets)
                setLoading(false)
                setError(undefined)
            } catch (error) {
                setError(error)
                setLoading(true)
            }
        }
        getUser()
    }, [])

    return (
        <div className={classes.container}>
            {!loading && (
                <div>
                    <img className={classes.image} src={unicorn} alt="Unicorn" />
                    <h2 className={classes.textField}>
                        {user.username} follows {user.following.join(', ')}
                    </h2>
                    {tweets.map((tweet) => (
                        <Tweet tweet={tweet} />
                    ))}
                </div>
            )}
            {error && (
              <ErrorBoundary error = {error}></ErrorBoundary>
            )}
        </div>
    )
}
