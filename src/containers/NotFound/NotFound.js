import React, { Component } from 'react';

import Helmet from 'react-helmet';

import Content from 'data/content.json';
import Seo from 'data/seo.json';

export default class NotFound extends Component {
    render() {
        const page = Content.NotFound;

        return (
            <section>
                <Helmet { ...Seo.NotFound }/>
                <div>Not found</div>
            </section>
        );
    }
}
