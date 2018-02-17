import * as React from "react"
import styled from "styled-components"
import { CSSTransitionGroup } from 'react-transition-group'

export interface HeadProps {
    title: string;
    urlImg: string;
    img(): any;
}

const StyledHead = styled.section`
    position: relative;
    height: 500px;
    width: 100%;
    padding: 20px 0;
    color: #fff;
`

const Head: React.StatelessComponent<HeadProps> = (props: HeadProps) => {
    const { title, urlImg } = props
    return (
        <CSSTransitionGroup
            transitionName = 'slide'
            transitionEnterTimeout = { 3000 }
            transitionLeaveTimeout = { 5000 }
            transitionAppear
            transitionAppearTimeout = { 5000 }
        >
            <StyledHead className="container-fluid">
                <BackgroundImage url={ urlImg }/>
                <img src="" alt=""/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h1>{ title }</h1>
                        </div>
                    </div>
                </div>
            </StyledHead>
        </CSSTransitionGroup>
        )
}

const BackgroundImage = styled.img.attrs({
    src:  ( props: { url: string } ): any => props.url
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;   
    object-fit: cover;
`

export default Head