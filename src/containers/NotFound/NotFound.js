import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Seo from 'data/seo.json';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends Component {
    render() {
        return (
            <section>
                <Helmet { ...Seo.NotFound }/>
                <div>Not found</div>
            </section>
        );
    }
}
