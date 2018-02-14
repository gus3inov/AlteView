import * as React from "react"
import toggleOpen, { InjectedProps } from '../../hocs/toggleOpen'

export interface OriginProps {
    isOpen: boolean;
}

class Header extends React.Component<OriginProps & InjectedProps> {
    render() {
        const { toggleOpen, isOpen } = this.props;

        return (
            <header>
                <button onClick={ toggleOpen }>Open</button>
                <div className="logo">
                    <img src="../../../assets/img/logo.svg" alt=""/>
                </div>
                <div>
                    { isOpen ? 'Close' : 'Open' }
                </div>
            </header>
        )
    }
}

export default toggleOpen(Header)