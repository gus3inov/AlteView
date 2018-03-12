import * as React from "react"
import {loadPosters} from "../../redux/posters"
import { IStore } from "../../store"
import { connect, DispatchProp } from "react-redux"

export interface PostersProps {
    posters?: Array<object>;
}

class Posters extends React.Component<PostersProps, {}> {
    componentDidMount(){
        const { loadPosters } = this.props

        loadPosters()
    }

    render() {
        const { posters } = this.props

        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state: IStore, ownProps: PostersProps) => ({
    posters: state.posters.get('entities')
})

export default connect<{}, {}, PostersProps>(mapStateToProps, { loadPosters })(Posters)