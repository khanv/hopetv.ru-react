import React, { PropTypes } from 'react';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import Styles from './main.scss';

export default function PageHead(props) {
    const background = 'https://cdn.hope.ua/web/tv.hope.ua/assets/page-background.png';
    const { mediaType, title, description } = props;

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
    let pageHeadComponentStyles = {
        height: `${scaleFactor[mediaType] * heightValues[mediaType]}vw`,
        backgroundImage: `url(${background})`
    };

    return (
        <section className={ Styles.pageHeadComponent } style={ pageHeadComponentStyles }>
            <h1>{ title }</h1>
            { [
                BreakPoints.tabletPortrait.name,
                BreakPoints.tabletLandscape.name,
                BreakPoints.desktop.name,
                BreakPoints.desktopWide.name,
                BreakPoints.desktopHD.name,
                BreakPoints.desktopMega.name
            ].indexOf(mediaType) !== -1 ? (
                <p dangerouslySetInnerHTML={ { __html: description } }/>
            ) : null }
        </section>
    );
}

PageHead.propTypes = {
    browser: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    mediaType: PropTypes.string.isRequired
};

PageHead.defaultTypes = {
    description: null
};
