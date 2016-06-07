import React, { PropTypes } from 'react';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';

import SvgSignLanguage from 'theme/components/About/IconInfo/iconInfo_sign.svg';
import SvgLive from 'theme/components/About/IconInfo/iconInfo_live.svg';
import SvgUK from 'theme/components/About/IconInfo/iconInfo_ukrainian.svg';

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
    const liveText = BreakPoints.phonePortrait.name === mediaType ? 'Дивіться щотижня <b>Прямі<br/>'
    + 'ефіри</b>' : 'Дивіться щотижня <b>Прямі ефіри</b>';

    return (
        <PixelPerfect templates={ templates } component="IconInfo">
            <section className={ Styles.IconInfoComponent }>
                <section className={ Grids.container }>
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
                    <p dangerouslySetInnerHTML={ { __html: liveText } }/>
                </div>
                </section>
            </section>
        </PixelPerfect>
    );
}

IconInfo.propTypes = {
    mediaType: PropTypes.string.isRequired
};
