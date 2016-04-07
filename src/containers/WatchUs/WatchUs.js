import React, { Component } from 'react';
import { Info, Locator } from 'components/WatchUs';

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
