import { connect } from 'react-redux';

import PostIndex from './post_index';
import {fetchPost, fetchPosts, deletePost} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    posts: Object.values(state.entities.posts)
})

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    // deletePost: (psotI) => dispatch(deleteReport(reportId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportIndex);