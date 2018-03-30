import * as React from "react";
import { loadPosters } from "../../redux/posters";
import { IStore } from "../../store";
import { connect } from "react-redux";
import PostersList from '../../ui/templates/PostersList';
import { allPosterSelectorFactory } from '../../selectors'

export interface PostersProps {
    posters?: Array<object>;
}

class PosterList extends React.PureComponent<PostersProps, {}> {
    componentDidMount(){
        const { loading, loaded, loadPosters } = this.props;
        if(!loading || !loaded) loadPosters();
    }

    render() {
        const { posters, loading } = this.props;
        if(loading) return <h1>Loading...</h1>;
        return (
            <PostersList posters={posters} />
        );
    }
}

const mapStateToProps = (state: IStore, ownProps: PostersProps) => ({
    posters: allPosterSelectorFactory(state),
    loading: state.posters.get('loading'),
    loaded:  state.posters.get('loaded')
});

export default connect<{}, {}, PostersProps>(mapStateToProps, { loadPosters })(PosterList);
