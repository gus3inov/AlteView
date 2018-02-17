import * as React from "react"
import styled from 'styled-components'
import {darkColor} from "../../style-vars"
import { Link } from 'react-router-dom'

export interface OriginProps {
    isOpen: boolean;
    toggleOpen(): any;
}

const StyledMenu = styled.div`
    background: ${darkColor};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: ${ (props: { isOpen: boolean }) => props.isOpen ? '0': '-2000px' };
    transition: 0.32s;
    z-index: 99;
`

const Menu = (props: OriginProps) => {
    return(
        <StyledMenu className="alt-menu" isOpen={ props.isOpen }>
            <nav className="alt-menu__nav">
                <ul>
                    <li><Link to="/" onClick={ props.toggleOpen }>Home</Link></li>
                    <li><Link to="/counter" onClick={ props.toggleOpen }>Counter</Link></li>
                    <li><Link to="/about" onClick={ props.toggleOpen }>About</Link></li>
                </ul>
            </nav>
        </StyledMenu>
    )
}

export default Menu