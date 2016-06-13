import React from 'react';
import Styles from './main.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Buttons() {
    const templates = [
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    return (
        <PixelPerfect templates={ templates } component="buttons">
            <section className={ Styles.buttonsComponent }>
                <a href="#">Контакти ТК «Надія»</a>
                <a href="#">Де нас дивитись?</a>
                <a href="#">Дивитися прямий ефір</a>
            </section>
        </PixelPerfect>
    );
}
