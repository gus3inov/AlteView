import * as React from "react"
import {loadPosters} from "../../redux/posters"
import { IStore } from "../../store"
import { connect, DispatchProp } from "react-redux"

export interface PostersProps {
    posters: Array<object>;
}

class Posters extends React.Component<PostersProps, {}> {
    componentDidMount(){
        loadPosters()
    }

    render() {
        const { posters } = this.props
        console.log(posters)
        return (
            <div>
                Hello
            </div>
        );
    }
}

const mapStateToProps = (state: IStore, ownProps: PostersProps) => ({
    posters: state.posters
})

export default connect<{}, {}, PostersProps>(mapStateToProps, { loadPosters })