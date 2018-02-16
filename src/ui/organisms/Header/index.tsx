import * as React from "react"
import Header from './Header'
import Menu from './Menu'
import {Fragment} from "react"
import toggleOpen, { InjectedProps } from '../../../hocs/toggleOpen'

export interface OriginProps {
    isOpen: boolean;
    toggleOpen(): any;
}

class MenuHeader extends React.Component<OriginProps & InjectedProps> {
    render() {
        const { toggleOpen, isOpen } = this.props

        return (
            <Fragment>
                <Menu toggleOpen={toggleOpen} isOpen={ isOpen }/>
                <Header toggleOpen={toggleOpen} isOpen={isOpen}/>
            </Fragment>
        )
    }
}

export default toggleOpen(MenuHeader)