import React, { Component } from 'react';
import PixelPerfect from 'components/PixelPerfect/component';

export default class WatchUs extends Component {
    render() {

        return (
            <section>
                <PixelPerfect templates={[]} component={this.constructor.displayName} opacity={45} />
                <h1>Watch Us</h1>
            </section>
        );
    }
}
