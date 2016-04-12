import React, { Component } from 'react';

import { Info, Locator } from 'components/WatchUs';

/* eslint-disable react/prefer-stateless-function */
export default class WatchUs extends Component {
    render() {
        return (
            <section>
                <Info/>
                <Locator/>
            </section>
        );
    }
}
