import * as React from "react"
import styled from 'styled-components'
import {darkColor} from "../../style-vars"
import { Link} from 'react-router-dom'

export interface OriginProps {
    isOpen?: boolean;
}

const StyledMenu = styled.div`
    background: ${darkColor};
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${ (props: { isOpen: boolean }) => props.isOpen ? '0': '-2000px' };
    transition: 0.32s;
`

const Menu = (props: OriginProps) => {
    return(
        <StyledMenu className="alt-menu" isOpen={ props.isOpen }>
            <nav className="alt-menu__nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </StyledMenu>
    )
}

export default Menu