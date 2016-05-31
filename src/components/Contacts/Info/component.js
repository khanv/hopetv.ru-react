import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';

import SvgLive from 'theme/components/Contacts/Info/contactUs.svg';
import SvgContacts from 'theme/components/Contacts/Info/phoneAndInternet.svg';
import SvgPhone from 'theme/components/Contacts/Info/phoneContact.svg';
import SvgSkype from 'theme/components/Contacts/Info/skypeContact.svg';
import SvgMail from 'theme/components/Contacts/Info/mailContact.svg';
import SvgSocial from 'theme/components/Contacts/Info/socialNetworks.svg';
import SvgTwitter from 'theme/components/Contacts/Info/twitterIcon.svg';
import SvgVk from 'theme/components/Contacts/Info/vkIcon.svg';
import SvgFacebook from 'theme/components/Contacts/Info/facebookIcon.svg';
import SvgOk from 'theme/components/Contacts/Info/odnoklassnikiIcon.svg';
import SvgYouTube from 'theme/components/Contacts/Info/youtubeIcon.svg';
import SvgInstgram from 'theme/components/Contacts/Info/instagramIcon.svg';

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

        const socialTitle = [BreakPoints.phonePortrait.name,
                             BreakPoints.phoneLandscape.name,
                             BreakPoints.tabletLandscape.name
                            ].indexOf(browser.mediaType) !== -1 ? 'Ищите в соц. сетях' : 'Ищите нас в социальных сетях';

        return (
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
        );
    }
}
