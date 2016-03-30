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

        const style1 = {
            backgroundColor: 'red',
            height: '201px'
        };
        const style2 = {
            backgroundColor: 'green',
            height: '201px'
        };
        const style3 = {
            backgroundColor: 'blue',
            height: '201px'
        };
        const style4 = {
            backgroundColor: 'black',
            height: '201px'
        };

        return (
            <section>
                <section style={ style1 }>
                    <h1>Section 1</h1>
                </section>
                <section style={ style2 }>
                    <h1>Section 2</h1>
                </section>
                <section style={ style3 }>
                    <h1>Section 3</h1>
                </section>
                <section style={ style4 }>
                    <PixelPerfect templates={ templates } component="Banner" opacity={ 38 }/>
                    <h1>Section 4</h1>
                </section>
            </section>
        );
    }
}
