import React, { PropTypes } from 'react';
import Styles from './main.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function WorldNetwork(props) {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name,
        BreakPoints.desktop.name
    ];

    const { mediaType } =  props;

    const text = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1 ?
        'Український телеканал «Надія» — один із <b>43 каналів</b> всесвітньої мережі Hope&nbsp;Channel'
        : 'Український телеканал «Надія» — один із <b>43 каналів</b> всесвітньої мережі Hope Channel, яка здійснює '
        + 'мовлення в таких країнах як Англія, Німеччина, Норвегія, Іспанія, Китай, Бразилія, Португалія, США та інші';

    return (
        <PixelPerfect templates={ templates } component="WorldNetwork">
            <section className={ Styles.worldNetworkComponent }>
                <header>
                    <h1>Всесвітня мережа</h1>
                    <h2>Hope Channel</h2>
                </header>
                <p dangerouslySetInnerHTML={ { __html: text } }/>
                <div className={ Styles.map }></div>
            </section>
        </PixelPerfect>
    );
}

WorldNetwork.propTypes = {
    mediaType: PropTypes.string.isRequired
};
