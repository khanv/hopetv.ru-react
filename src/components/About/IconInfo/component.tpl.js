import React, { PropTypes } from 'react';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';

import SvgSignLanguage from 'components/About/IconInfo/Assets/sign.svg';
import SvgLive from 'components/About/IconInfo/Assets/live.svg';
import SvgUK from 'components/About/IconInfo/Assets/ukrainian.svg';

export default function IconInfo(props) {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name,
        BreakPoints.desktop.name
    ];

    const { mediaType } =  props;
    const signLanguage = BreakPoints.phonePortrait.name === mediaType ? 'Сурдопе- рекладом' : 'Сурдоперекладом';
    const liveText = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name].indexOf(mediaType) !== -1 ? 'Дивіться щотижня'
        : 'Щотижня';
    const live = BreakPoints.phonePortrait.name === mediaType ? 'Прямі<br/>ефіри' : 'Прямі ефіри';

    return (
        <PixelPerfect templates={ templates } component="IconInfo">
            <section className={ Styles.iconInfoComponent }>
                <div className={ Grids.container }>
                    <div className={ Styles.container }>
                        <div className={ Styles.uk }>
                            <InlineSvg content={ SvgUK }/>
                            <p>Якісний та оригінальний <b>Український контент</b></p>
                        </div>
                        <div className={ Styles.signLanguage }>
                            <InlineSvg content={ SvgSignLanguage }/>
                            <p>Щодня програми з <b>{ signLanguage }</b></p>
                        </div>
                        <div className={ Styles.live }>
                            <InlineSvg content={ SvgLive }/>
                            <p>{ liveText } <b dangerouslySetInnerHTML={ { __html: live } }/> </p>
                        </div>
                    </div>
                </div>
            </section>
        </PixelPerfect>
    );
}

IconInfo.propTypes = {
    mediaType: PropTypes.string.isRequired
};
