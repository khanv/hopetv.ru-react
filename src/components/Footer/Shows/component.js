import React, { PropTypes } from 'react';
import Styles from './main.scss';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Shows(props) {
    const { mediaType } = props;

    if ([
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1) {
        return null;
    }

    const shows = (
        [
            BreakPoints.tabletPortrait.name,
            BreakPoints.tabletLandscape.name,
            BreakPoints.desktop.name,
            BreakPoints.desktopHD.name,
            BreakPoints.desktopMega.name,
            BreakPoints.desktopWide.name
        ].indexOf(mediaType) !== -1 ? (
            <section className={ Styles.shows }>
                <header>
                    <h1>Популярные программы</h1>
                    <a href="#">Все программы</a>
                </header>
                <div className={ Styles.col1 }>
                    <div>
                        <h2>Изучение Библии</h2>
                        <ul>
                            <li><a href="#">Вознесіння колісниці спасіння</a></li>
                            <li><a href="#">Пророцтва збуваються</a></li>
                            <li><a href="#">Модная книга</a></li>
                            <li><a href="#">Евангелиe в современном мире</a></li>
                            <li><a href="#">Так промовляє Біблія</a></li>
                            <li><a href="#">Ранок Надії</a></li>
                            <li><a href="#">Пророки говорят</a></li>
                            <li><a href="#">Хочу Вас спросить</a></li>
                            <li><a href="#">Згадуючи найважливіше</a></li>
                            <li><a href="#">Познаем истину</a></li>
                            { [
                                BreakPoints.tabletPortrait.name
                            ].indexOf(mediaType) !== -1 ? (
                                <div>
                                    <li><a href="#">В пошуках істини</a></li>
                                    <li><a href="#">Богослужение в храме на Подоле</a></li>
                                    <li><a href="#">Богослужіння у Львові</a></li>
                                </div>
                            ) : null }
                        </ul>
                    </div>
                </div>
                <div className={ Styles.col2 }>
                    <div>
                        <h2>История и религия</h2>
                        <ul>
                            <li><a href="#">Ваша думка</a></li>
                            <li><a href="#">Диагноз: здоровье</a></li>
                            <li><a href="#">...є Любов</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Детские</h2>
                        <ul>
                            <li><a href="#">Дружболандия</a></li>
                            <li><a href="#">В гостях у Добрячка</a></li>
                            <li><a href="#">Малюваки</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Музыкальные</h2>
                        <ul>
                            <li><a href="#">Музична скринька</a></li>
                        </ul>
                    </div>
                </div>
                <div className={ Styles.col3 }>
                    <div>
                        <h2>Люди и мнения</h2>
                        <ul>
                            <li><a href="#">Змінюючи світ</a></li>
                            <li><a href="#">Жизнь Надежды</a></li>
                            <li><a href="#">Вісті Надії</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Молодежные</h2>
                        <ul>
                            <li><a href="#">Поспілкуймося</a></li>
                            <li><a href="#">Здобудь мудрість</a></li>
                            <li><a href="#">Давайте поговорим</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Спецпроекты</h2>
                        <ul>
                            <li>
                                <a href="#">Фільми</a>
                                <span className={ Styles.label }>new</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        ) : null
    );

    const about = (
        [
            BreakPoints.tabletLandscape.name,
            BreakPoints.desktop.name,
            BreakPoints.desktopHD.name,
            BreakPoints.desktopMega.name,
            BreakPoints.desktopWide.name
        ].indexOf(mediaType) !== -1 ? (
            <section className={ Styles.about } >
                <h1>О телеканале</h1>
                <p><strong>Телеканал</strong> предлагает большое разнообразие программ — для детей и молодежи, о
                    семье, здоровье, творческие программы, а также программы духовной тематики — с помощью которых
                    Вы сможете углубляться в познание библейских истин, быть участником интересных жизненных историй,
                    отправляться с детскими героями в увлекательные путешествия, погружаться в мир музыки, узнавать о
                    событиях в мире и Украине в <strong>позитивной перспективе.</strong></p>
                <a href="#">Подробнее...</a>
            </section>
        ) : null
    );

    return (
        <PixelPerfect templates={ templates } component="shows">
            <section className={ Styles.showsComponent }>
                { shows }
                { about }
            </section>
        </PixelPerfect>
    );
}
Shows.propTypes = {
    mediaType: PropTypes.string.isRequired
};

