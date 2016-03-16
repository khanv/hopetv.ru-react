import React, { Component, PropTypes } from 'react';
import Merge from 'merge';
import { asyncConnect } from 'redux-async-connect';

import Helmet from 'react-helmet';
import Seo from 'data/seo.json';

import { connect } from 'react-redux';

import Content from 'data/content.json';

/*eslint-disable*/
@asyncConnect([{
    deferred: true,
    promise: ({store: {dispatch, getState}}) => {
        const state = getState();
        const promises = [];

        return Promise.all(promises);
    }
}])
@connect(
    (state) => {
        return state;
    }
)
/*eslint-enable*/
export default class Home extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Helmet { ...Seo.Home }/>
                <div>Home page</div>
            </div>
        );
    }
}
