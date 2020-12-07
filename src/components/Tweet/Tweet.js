import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const createStyles = makeStyles((theme) => ({
    textField: {
        display: 'inline-block',
    },
    image: {
        width: '20%',
    },
    tweetForm: {
        width: '50%',
        margin: '20px auto',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#95B8D1',
    },
}))

export default function Tweet(props) {
    const classes = createStyles()

    return (
        <div className={classes.tweetForm}>
            @{props.tweet.user}: {props.tweet.content}
        </div>
    )
}
