import React from 'react';
import Styles from './main.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

// убрал имя функции Banner
export default function () {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    return (
        <PixelPerfect templates={ templates } component="banner" opacity="40">
            <section className={ Styles.bannerComponent }>
                <div className={ Styles.banner }>
                    <div className={ Styles.container }>
                        <h1>
                            Наша мета – створення <span>якісного</span>,
                            <span> морально-чистого</span>,
                            <span> актуального</span> медіапродукту
                        </h1>
                        <div className={ Styles.poster }></div>
                    </div>
                </div>
            </section>
        </PixelPerfect>
    );
}
