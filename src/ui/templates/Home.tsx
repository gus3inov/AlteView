import * as React from "react"
import {Fragment} from "react"
import Pannel from '../organisms/Pannel'

export interface HelloProps {
    title?: string;
}

const Home = (props: HelloProps)=> {
    return (
        <Fragment>
                <Pannel title="Main Page" urlImg="https://frontside.io/blog/2016/12/15/building-infinite-scroll-in-react-native/react-native-header.jpg" />
        </Fragment>
    )
}

export default Home