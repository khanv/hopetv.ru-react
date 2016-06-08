import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';
import PixelPerfect from 'components/PixelPerfect/component';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';

import SvgLive from 'components/Contacts/Info/Assets/contactUs.svg';
import SvgContacts from 'components/Contacts/Info/Assets/phoneAndInternet.svg';
import SvgPhone from 'components/Contacts/Info/Assets/phoneContact.svg';
import SvgSkype from 'components/Contacts/Info/Assets/skypeContact.svg';
import SvgMail from 'components/Contacts/Info/Assets/mailContact.svg';
import SvgSocial from 'components/Contacts/Info/Assets/socialNetworks.svg';
import SvgTwitter from 'components/Contacts/Info/Assets/twitterIcon.svg';
import SvgVk from 'components/Contacts/Info/Assets/vkIcon.svg';
import SvgFacebook from 'components/Contacts/Info/Assets/facebookIcon.svg';
import SvgOk from 'components/Contacts/Info/Assets/odnoklassnikiIcon.svg';
import SvgYouTube from 'components/Contacts/Info/Assets/youtubeIcon.svg';
import SvgInstgram from 'components/Contacts/Info/Assets/instagramIcon.svg';

/* eslint-disable react/prefer-stateless-function */
@connect(({ browser }) => {
    return { browser };
})
export default class Info extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired
    };

    render() {
        const { browser } = this.props;

        const templates = [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name,
            BreakPoints.tabletPortrait.name,
            BreakPoints.tabletLandscape.name,
            BreakPoints.desktop.name
        ];

        const socialTitle = browser.mediaType === BreakPoints.tabletPortrait.name ?
            'Ищите нас в социальных сетях'
            : 'Ищите в соц. сетях';

        return (
            <PixelPerfect templates={ templates } component="Info">
                <section className={ Grids.container }>
                    <section className={ Styles.infoComponent }>
                        <section className={ Styles.live }>
                            <header>
                                <InlineSvg content={ SvgLive }/>
                                <h1>Общайтесь онлайн</h1>
                            </header>
                            <div className={ Styles.chat }>
                                <p>Онлайн чат работает каждый день с <b>8:00 до 20:00</b></p>
                                <a href="#">Написать в онлайн чат</a>
                            </div>
                            <div className={ Styles.call }>
                                <p>Онлайн чат работает каждый день с <b>8:00 до 20:00</b></p>
                                <a href="#">Позвонить нам сейчас</a>
                            </div>
                        </section>
                        <section className={ Styles.contacts }>
                            <header>
                                <InlineSvg content={ SvgContacts }/>
                                <h1>Задайте вопрос</h1>
                            </header>
                            <div className={ Styles.phone }>
                                <div className={ Styles.row }>
                                    <InlineSvg content={ SvgPhone }/>
                                    <span>0 800 30 20 20</span>
                                </div>
                                <div>
                                    <p><span>Звоните</span> ежедневно: <b>8:00-20:00</b></p>
                                </div>
                            </div>
                            <div className={ Styles.skype }>
                                <div className={ Styles.row }>
                                    <InlineSvg content={ SvgSkype }/>
                                    <a href="#">contact-hope</a>
                                </div>
                                <div>
                                    <p>Ответ <span>в сети Skype</span> в течение <b>1 мин</b></p>
                                </div>
                            </div>
                            <div className={ Styles.mail }>
                                <div className={ Styles.row }>
                                    <InlineSvg content={ SvgMail }/>
                                    <a href="#">contact@hope.ua</a>
                                </div>
                                <div>
                                    <p>Ответ <span>по почте</span> в течение <b>24 часов</b></p>
                                </div>
                            </div>
                        </section>
                        <section className={ Styles.social }>
                            <header>
                                <InlineSvg content={ SvgSocial }/>
                                <h1>{ socialTitle }</h1>
                            </header>
                            <div className={ Styles.list }>
                                <div className={ Styles.item }>
                                    <InlineSvg content={ SvgTwitter }/>
                                    <span>5k</span>
                                </div>
                                <div className={ Styles.item }>
                                    <InlineSvg content={ SvgVk }/>
                                    <span>1k</span>
                                </div>
                                <div className={ Styles.item }>
                                    <InlineSvg content={ SvgFacebook }/>
                                    <span>3k</span>
                                </div>
                                <div className={ Styles.item }>
                                    <InlineSvg content={ SvgOk }/>
                                    <span>6k</span>
                                </div>
                                <div className={ Styles.item }>
                                    <InlineSvg content={ SvgYouTube }/>
                                    <span>3k</span>
                                </div>
                                <div className={ Styles.item }>
                                    <InlineSvg content={ SvgInstgram }/>
                                    <span>1k</span>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </PixelPerfect>
        );
    }
}
