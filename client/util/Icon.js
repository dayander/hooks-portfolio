import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
    return <img style={{maxWidth: '25px'}} src={props.img} alt={props.alt} />
}

PropTypes.Icon = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Icon
