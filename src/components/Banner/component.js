import React, { Component, PropTypes } from 'react';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default class Banner extends Component {
    render() {
        const templates = [
            BreakPoints.phoneLandscape.name,
            BreakPoints.desktop.name,
            BreakPoints.desktopMega.name
        ];
        
        return (
            <section>
                <PixelPerfect templates={ templates } component={ this.constructor.displayName } opacity={ 45 }/>
                <h1>Banner</h1>
            </section>
        );
    }
}
