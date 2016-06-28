import React, { PropTypes } from 'react';
import Styles from './main.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Form(props) {
    const templates = [
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    const { mediaType } = props;

    if ([
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1) {
        return null;
    }

    return (
        <PixelPerfect templates={ templates } component="form">
            <section className={ Styles.formComponent }>
                <header>
                    <h1>Контакт Центр «Надія»</h1>
                </header>
                <input type="text" className={ Styles.name } placeholder="Miroslav"/>
                <input type="email" className={ Styles.email }placeholder="Ваш E-MAIL:"/>
                <textarea placeholder="Текст сообщения..."></textarea>
                <a href="#">Отправить письмо</a>
            </section>
        </PixelPerfect>
    );
}
Form.propTypes = {
    mediaType: PropTypes.string.isRequired
};
