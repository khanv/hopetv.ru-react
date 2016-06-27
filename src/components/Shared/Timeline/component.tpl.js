import React, { PropTypes } from 'react';
import Styles from './main.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import cx from 'classnames';

export default function Timeline(props) {
    const templates = [
        BreakPoints.tabletLandscape.name,
        BreakPoints.desktop.name
    ];

    const { mediaType } =  props;

    if ([
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.desktopWide.name,
        BreakPoints.desktopHD.name,
        BreakPoints.desktopMega.name].indexOf(mediaType) !== -1) {
        return null;
    }

    const episode1Style = {
        width: 330
    };
    const episode2Style = {
        width: 262
    };
    const episode3Style = {
        width: 151
    };
    const episode4Style = {
        width: 209
    };
    const episode5Style = {
        width: 94
    };
    const episode6Style = {
        width: 151
    };
    const episodeActiveClass = cx({
        [Styles.episode]: true,
        [Styles.active]: true
    });

    return (
        <PixelPerfect templates={ templates } component="timeline">
            <section className={ Styles.timelineComponent }>
                <div className={ Styles.scheduler }>
                    <div className={ Styles.clock }>
                        <span>12:50</span>
                    </div>
                    <div className={ Styles.episodes }>
                        <div className={ Styles.episode } style={ episode1Style }>
                            <div className={ Styles.timeline }>
                                <div className={ Styles.prev }></div>
                                <div className={ Styles.next }></div>
                            </div>
                            <div className={ Styles.info }>
                                <span className={ Styles.time }>11:40</span>
                                <span className={ Styles.label }></span>
                            </div>
                            { [
                                BreakPoints.desktop.name
                            ].indexOf(mediaType) !== -1 ? (
                                <p className={ Styles.title }>Богослужение в храме</p>
                            ) : null }
                        </div>

                        <div className={ episodeActiveClass } style={ episode2Style }>
                            <div className={ Styles.timeline }>
                                <div className={ Styles.prev }></div>
                                <div className={ Styles.next }></div>
                            </div>
                            <div className={ Styles.info }>
                                <span className={ Styles.time }>12:40</span>
                            </div>
                            { [
                                BreakPoints.desktop.name
                            ].indexOf(mediaType) !== -1 ? (
                                <p className={ Styles.title }>В центре внимания</p>
                            ) : null }
                        </div>

                        <div className={ Styles.episode } style={ episode3Style }>
                            <div className={ Styles.timeline }>
                                <div className={ Styles.prev }></div>
                                <div className={ Styles.next }></div>
                            </div>
                            <div className={ Styles.info }>
                                <span className={ Styles.time }>13:20</span>
                                <span className={ Styles.label }>live</span>
                            </div>
                            { [
                                BreakPoints.desktop.name
                            ].indexOf(mediaType) !== -1 ? (
                                <p className={ Styles.title }>Богослужение в храме на</p>
                            ) : null }
                        </div>

                        <div className={ Styles.episode } style={ episode4Style }>
                            <div className={ Styles.timeline }>
                                <div className={ Styles.prev }></div>
                                <div className={ Styles.next }></div>
                            </div>
                            <div className={ Styles.info }>
                                <span className={ Styles.time }>14:00</span>
                            </div>
                            { [
                                BreakPoints.desktop.name
                            ].indexOf(mediaType) !== -1 ? (
                                <p className={ Styles.title }>В центре внимания</p>
                            ) : null }
                        </div>

                        <div className={ Styles.episode } style={ episode5Style }>
                            <div className={ Styles.timeline }>
                                <div className={ Styles.prev }></div>
                                <div className={ Styles.next }></div>
                            </div>
                            <div className={ Styles.info }>
                                <span className={ Styles.time }>15:20</span>
                            </div>
                            { [
                                BreakPoints.desktop.name
                            ].indexOf(mediaType) !== -1 ? (
                                <p className={ Styles.title }>Вечер молитвы</p>
                            ) : null }
                        </div>

                        <div className={ Styles.episode } style={ episode6Style }>
                            <div className={ Styles.timeline }>
                                <div className={ Styles.prev }></div>
                                <div className={ Styles.next }></div>
                            </div>
                            <div className={ Styles.info }>
                                <span className={ Styles.time }>15:35</span>
                            </div>
                            { [
                                BreakPoints.desktop.name
                            ].indexOf(mediaType) !== -1 ? (
                                <p className={ Styles.title }>Богослужение в храме</p>
                            ) : null }
                        </div>
                    </div>
                </div>
            </section>
        </PixelPerfect>
    );
}

Timeline.propTypes = {
    mediaType: PropTypes.string.isRequired
};
