import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';

import SvgLive from 'components/Contacts/Info/Assets/contactUs.svg';
import SvgContacts from 'components/Contacts/Info/Assets/phoneAndInternet.svg';
// import SvgPhone from 'components/Contacts/Info/Assets/phoneContact.svg';
// import SvgSkype from 'components/Contacts/Info/Assets/skypeContact.svg';
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

        const socialTitle = browser.mediaType === BreakPoints.tabletPortrait.name ?
            'Ищите нас в социальных сетях'
            : 'Ищите в соц. сетях';

        return (
            <section className={ Grids.container }>
                <section className={ Styles.infoComponent }>
                    <section className={ Styles.live }>
                        <header>
                            <InlineSvg content={ SvgLive }/>
                            <h1>Телезрителям</h1>
                        </header>
                        <div className={ Styles.call }>
                            <p>Мы верим, что наш день прожит не зря, если мы смогли помочь
                            хотя бы одному из вас.</p>
                            <a href="mailto:help@hopetv.ru">help@hopetv.ru</a>
                            <br/>
                            <p>Позвоните нам по телефону горячей линии
                                <strong>&nbsp;8-800-100-18-44</strong> (бесплатно по России)
                            </p>
                        </div>
                    </section>
                    <section className={ Styles.contacts }>
                        <header>
                            <InlineSvg content={ SvgContacts }/>
                            <h1>Партнерам</h1>
                        </header>
                        <div className={ Styles.mail }>
                            <p className={ Styles.text }>
                                Уважаемые партнеры, вы можете писать нам на почту для
                                получения информации по интересующим вопросам
                            </p>
                            <div className={ Styles.row }>
                                <InlineSvg content={ SvgMail }/>
                                <a href="mailto:contact@hopetv.ru">contact@hopetv.ru</a>
                            </div>
                            <div>
                                <p>По вопросам рекламы и вещания</p>
                            </div>
                        </div>
                    </section>
                    <section className={ Styles.social }>
                        <header>
                            <InlineSvg content={ SvgSocial }/>
                            <h1>{ socialTitle }</h1>
                        </header>
                        <div className={ Styles.list }>
                            <a
                                href="https://twitter.com/NadezhdaTV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={ Styles.item }
                            >
                                <InlineSvg content={ SvgTwitter }/>
                                <span>1k</span>
                            </a>
                            <a
                                href="https://vk.com/nadezhdatv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={ Styles.item }
                            >
                                <InlineSvg content={ SvgVk }/>
                                <span>5k</span>
                            </a>
                            <a
                                href="https://www.facebook.com/NadezhdaTV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={ Styles.item }
                            >
                                <InlineSvg content={ SvgFacebook }/>
                                <span>2k</span>
                            </a>
                            <a
                                href="https://ok.ru/nadezhdatv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={ Styles.item }
                            >
                                <InlineSvg content={ SvgOk }/>
                                <span>3k</span>
                            </a>
                            <a
                                href="https://www.youtube.com/user/nadezhdaTV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={ Styles.item }
                            >
                                <InlineSvg content={ SvgYouTube }/>
                                <span>7k</span>
                            </a>
                            <a
                                href="https://www.instagram.com/hopetv_ru/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={ Styles.item }
                            >
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
