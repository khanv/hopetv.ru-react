import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';
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

    componentDidMount = () => {
        /* eslint-disable no-undef */
        window.senderCallback = () => {
            SenderWidget.init({
                companyId: 'i20076624232',
                autostart: false,
                showButton: false
            });
        };
        /* eslint-enable no-undef */

        ((d, s, id) => {
            const fjs = d.getElementsByTagName(s)[0];
            const js = d.createElement(s);
            js.id = id;
            js.src = 'https://widget.sender.mobi/build/init.js';
            fjs.parentNode.insertBefore(js, fjs, 'sender-widget');
        })(document, 'script');
    };

    startChat = (event) => {
        event.preventDefault();
        /* eslint-disable no-undef */
        SenderWidget.showWidget();
        /* eslint-enable no-undef */
    };

    render() {
        const { browser } = this.props;

        const socialTitle = browser.mediaType === BreakPoints.tabletPortrait.name ?
            'Ищите нас в социальных сетях'
            : 'Ищите в соц. сетях';

        return (
            <section className={ Grids.container }>
                <section className={ Styles.infoComponent }>
                    <section className={ Styles.live }>
                        <header>
                            <InlineSvg content={ SvgLive }/>
                            <h1>Общайтесь онлайн</h1>
                        </header>
                        <div className={ Styles.chat }>
                            <p>Онлайн чат работает каждый день с <b>9:00 до 17:00</b></p>
                            <a href="#" onClick={ this.startChat }>Написать в онлайн чат</a>
                        </div>
                        <div className={ Styles.call }>
                            <p>Контакт-центр работает каждый день с <b>9:00 до 21:00</b></p>
                            <a href="skype:contact-hope?call">Позвонить нам сейчас</a>
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
                                <p><span>Звоните</span> ежедневно: <b>9:00-21:00</b></p>
                            </div>
                        </div>
                        <div className={ Styles.skype }>
                            <div className={ Styles.row }>
                                <InlineSvg content={ SvgSkype }/>
                                <a href="skype:contact-hope?chat">contact-hope</a>
                            </div>
                            <div>
                                <p>Ответ <span>в сети Skype</span> в течение <b>5 мин</b></p>
                            </div>
                        </div>
                        <div className={ Styles.mail }>
                            <div className={ Styles.row }>
                                <InlineSvg content={ SvgMail }/>
                                <a href="mailto:contact@hope.ua">contact@hope.ua</a>
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
                            <a href="https://twitter.com/ua_hope" className={ Styles.item }>
                                <InlineSvg content={ SvgTwitter }/>
                                <span>1k</span>
                            </a>
                            <a href="https://vk.com/hopechannel" className={ Styles.item }>
                                <InlineSvg content={ SvgVk }/>
                                <span>5k</span>
                            </a>
                            <a href="https://www.facebook.com/hope.ua/" className={ Styles.item }>
                                <InlineSvg content={ SvgFacebook }/>
                                <span>2k</span>
                            </a>
                            <a href="https://ok.ru/hopechannel" className={ Styles.item }>
                                <InlineSvg content={ SvgOk }/>
                                <span>3k</span>
                            </a>
                            <a href="https://www.youtube.com/user/HopeChannelUkraine" className={ Styles.item }>
                                <InlineSvg content={ SvgYouTube }/>
                                <span>7k</span>
                            </a>
                            <a href="https://www.instagram.com/ua_hope/" className={ Styles.item }>
                                <InlineSvg content={ SvgInstgram }/>
                                <span>1k</span>
                            </a>
                        </div>
                    </section>
                </section>
            </section>
        );
    }
}
