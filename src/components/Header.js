import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1 className="title">Hi My name is {props.name} and I am {props.age} years old.</h1>
            
            <p>So any {props.CEO}, {props.CIO} or any {props.CTO} would like to hire me please get in touch</p>
        </div>
    )
}

export default Header;
