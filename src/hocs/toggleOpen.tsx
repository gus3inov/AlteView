import * as React from 'react'
import {Fragment} from "react"

export interface InjectedProps {
    isOpen: boolean;
    toggleOpen(): any;
}

export interface ExternalProps {
    isOpen: boolean;
}

export interface State {
    isOpen: boolean;
}

export default function toggleOpen<OriginProps>(Component: React.ComponentType<OriginProps & InjectedProps>){
    type ResultProps = OriginProps & ExternalProps

    return class extends React.Component<ResultProps, State>{

        static displayName =  `toggleOpen(${Component.displayName || Component.name })`

        state: State = {
            isOpen: this.props.isOpen
        }

        toggleOpen = () => {
            const { isOpen } = this.props

            this.setState({
                isOpen: !this.state.isOpen
            })

        }

        render(){
            return (
                <Fragment>
                    <Component {...this.props} {...this.state} toggleOpen = { this.toggleOpen } />
                </Fragment>
            )
        }

    }
}
