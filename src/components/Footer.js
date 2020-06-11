import React from 'react'

const Footer = ({showAll, showComplete, showActive}) => {
    return (
        <div className ='footer'>
            <button onClick={showAll}>Show all</button>
            <button onClick={showComplete}>Show Complete</button>
            <button onClick={showActive}>Show Uncomplete</button>
        </div>
    )
}

export default Footer
