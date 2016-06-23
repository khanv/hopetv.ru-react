import React, { PropTypes } from 'react';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Breadcrumbs(props) {
    const templates = [
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    const { mediaType } =  props;

    if ([
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name].indexOf(mediaType) !== -1) {
        return null;
    }

    return (
        <PixelPerfect templates={ templates } component="breadcrumbs">
            <section className={ Styles.breadcrumbsComponent }>
                <div className={ Grids.container }>
                    <ul>
                        <li><a href="#">Главная</a></li>
                        { [
                            BreakPoints.tabletLandscape.name
                        ].indexOf(mediaType) !== -1 ? (
                            <li><span>Список программ</span></li>
                        ) : null }
                        { [
                            BreakPoints.tabletPortrait.name
                        ].indexOf(mediaType) !== -1 ? (
                            <li><span>Где нас смотреть?</span></li>
                        ) : null }
                    </ul>
                </div>
            </section>
        </PixelPerfect>
    );
}

Breadcrumbs.propTypes = {
    mediaType: PropTypes.string.isRequired
};
