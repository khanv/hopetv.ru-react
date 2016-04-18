import React, { Component, PropTypes } from 'react';
// import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

import Helmet from 'react-helmet';
import Seo from 'data/seo.json';



// @asyncConnect([{
//     deferred: true,
//     promise: ({ store: { dispatch, getState } }) => {
//         const state = getState();
//         const promises = [];
//
//         return Promise.all(promises);
//     }
// }])
@connect(
    (state) => {
        return state;
    }
)
/* eslint-disable react/prefer-stateless-function */
export default class Home extends Component {
    render() {
        return (
            <div>
                <Helmet { ...Seo.Home }/>
            </div>
        );
    }
}
