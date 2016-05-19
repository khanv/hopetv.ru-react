import React, { Component } from 'react';
import { Locator } from 'components/WatchUs';
import LocatorApi from 'api/Locator';

/* eslint-disable react/prefer-stateless-function */
export default class WatchUs extends Component {
    render() {
        return (
            <section>
                <Locator regions={ LocatorApi.getRegions() }/>
            </section>
        );
    }
}
