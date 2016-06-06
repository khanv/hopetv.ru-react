import React, { PropTypes } from 'react';
import Styles from './main.scss';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function WorldNetwork(props) {
    const { mediaType, t } =  props;

    const text = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1 ? 'worldNetwork__mobile' : 'worldNetwork__desktop';

    return (
        <section className={ Styles.worldNetworkComponent }>
            <header>
                <h1>{ t('Всесвітня мережа') }</h1>
                <h2>Hope Channel</h2>
            </header>
            <p dangerouslySetInnerHTML={ { __html: t(text) } }/>
            <div className={ Styles.map }></div>
        </section>
    );
}

WorldNetwork.propTypes = {
    mediaType: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired
};
