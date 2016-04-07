import React, { Component, PropTypes } from 'react';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default class Info extends Component {
    render() {
        const templates = [
            {
                name: BreakPoints.desktop.name,
                states: ['hover', 'another']
            },
            BreakPoints.desktopMega.name
        ];

        return (
            <section>
                <PixelPerfect templates={ templates } component="Banner"/>
                <h1>Info</h1>
            </section>
        );
    }
}
