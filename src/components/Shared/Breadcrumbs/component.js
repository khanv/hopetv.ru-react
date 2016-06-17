import React, { PropTypes } from 'react';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Breadcrumbs(props) {
    const { mediaType } =  props;

    return (
        <section className={ Styles.breadcrumbsComponent }>
            <div className={ Grids.container }>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li>
                        { [
                            BreakPoints.tabletLandscape.name
                        ].indexOf(mediaType) !== -1 ? (
                            <span>Список программ</span>
                        ) : null }
                        { [
                            BreakPoints.tabletPortrait.name
                        ].indexOf(mediaType) !== -1 ? (
                            <span>Где нас смотреть?</span>
                        ) : null }
                    </li>
                </ul>
            </div>
        </section>
    );
}

Breadcrumbs.propTypes = {
    mediaType: PropTypes.string.isRequired
};
