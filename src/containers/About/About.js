import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Why, Banner } from 'components/About';

/* eslint-disable react/prefer-stateless-function */
@connect(({ browser }) => {
    return { browser };
})
export default class About extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired
    };

    render() {
        const { browser } = this.props;

        return (
            <section>
                <Why mediaType={ browser.mediaType }/>
                <Banner/>
            </section>
        );
    }
}
