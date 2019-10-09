import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Jumbotron from './Jumbotron'
import Container from './Container'

const useStyles = makeStyles(theme => ({
    pullQuote: {
        borderLeft: 'solid 5px',
        padding: '0 0 0 30px',
    }
}))

function PullQuote(props) {
    const classes = useStyles()
    const {children} = props

    return(
        <Jumbotron>
            <Container>
                <div className={classes.pullQuote}>
                    {children}
                </div>
            </Container>
        </Jumbotron>
    )
}

export default PullQuote