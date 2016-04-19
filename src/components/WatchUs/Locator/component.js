import React, { Component } from 'react';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

/* eslint-disable react/prefer-stateless-function */
export default class Locator extends Component {
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
                <h1>Locator</h1>
            </section>
        );
    }
}
