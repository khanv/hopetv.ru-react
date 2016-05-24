import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import Styles from './main.scss';

/* eslint-disable react/prefer-stateless-function */

@connect(({ browser }) => {
    return { browser };
})
export default class Info extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired
    };

    render() {
        const { browser } = this.props;

        const scaleFactor = {
            [BreakPoints.phonePortrait.name]: 0.1562500,
            [BreakPoints.phoneLandscape.name]: 0.08803,
            [BreakPoints.tabletPortrait.name]: 0.065106,
            [BreakPoints.tabletLandscape.name]: 0.08803
        };
        const heightValues = {
            [BreakPoints.phonePortrait.name]: 280,
            [BreakPoints.phoneLandscape.name]: 280,
            [BreakPoints.tabletPortrait.name]: 560,
            [BreakPoints.tabletLandscape.name]: 222
        };

        const background = 'https://cdn.hope.ua/web/tv.hope.ua/assets/page-background.png';

        let pageHeadComponentStyles = {
            height: `${scaleFactor[browser.mediaType] * heightValues[browser.mediaType]}vw`,
            backgroundImage: `url(${background})`
        };

        return (
            <section className={ Styles.pageHeadComponent } style={ pageHeadComponentStyles }>
                <h1>Контакты</h1>
                { [
                    BreakPoints.tabletPortrait.name,
                    BreakPoints.tabletLandscape.name,
                    BreakPoints.desktop.name,
                    BreakPoints.desktopWide.name,
                    BreakPoints.desktopHD.name,
                    BreakPoints.desktopMega.name
                ].indexOf(browser.mediaType) !== -1 ? (
                    <p>
                        <b>Дорогие телезрители!</b>
                        Теперь вы сможете найти нас через спутниковую антенну, в кабельных сетях, Интернете, а также
                        используя мобильные приложения.
                    </p>
                ) : null }
            </section>
        );
    }
}
