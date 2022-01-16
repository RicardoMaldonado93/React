import React from 'react'

export const Small = React.memo(({value = 0} ) => {
    console.log("me volvi a llamar")
    return (
        <small> { value } </small>
    )
})
