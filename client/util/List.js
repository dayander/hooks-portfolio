import React from 'react'
import propTypes from 'prop-types'

function List(props) {
    const {data} = props

    return(
        <div style={{paddingBottom: '25px'}}>
            <ul style={{lineHeight: '25px'}}>
                {data.map((x,i) => {
                    return(
                        <li key={i}>
                            {x}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

List.propTypes = {
    data: propTypes.array.isRequired,
}

export default List