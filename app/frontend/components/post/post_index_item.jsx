import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ReportIndexItem = (props) => {
    return (
        <div>
            <span>
                {props.post}
            </span>
        </div>
    )
};

export default withRouter(ReportIndexItem);