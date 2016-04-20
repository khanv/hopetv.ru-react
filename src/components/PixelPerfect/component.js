import React, { Component, PropTypes } from 'react';
import Styles from './styles.scss';
import BreakPoints from './breakpoints';
import cx from 'classnames';

/**
 * @param {int} currentWidth
 * @param {object} breakPoints
 *
 * @returns {string} breakPoint name
 */
function getCurrentBreakpoint(currentWidth, breakPoints) {
    const breakPoint = Object.keys(breakPoints).find((bp) => {
        let current = bp;

        if (typeof bp === 'object') {
            current = bp.name;
        }

        return currentWidth >= breakPoints[current].min && currentWidth <= breakPoints[current].max;
    });

    return breakPoint;
}

export default class PixelPerfect extends Component {
    static propTypes = {
        component: PropTypes.string.isRequired,
        children: PropTypes.object,
        opacity: PropTypes.number,
        breakPoints: PropTypes.object,
        templates: PropTypes.array
    };

    static defaultProps = {
        opacity: 80,
        breakPoints: BreakPoints,
        templates: []
    };

    componentDidMount = () => {
        this.setState({
            width: global.window.innerWidth,
            currentBreakpoint: getCurrentBreakpoint(global.window.innerWidth, this.props.breakPoints),
            opacity: this.props.opacity
        });

        global.window.onresize = this.onResize;
    };

    constructor() {
        super();
        this.state = {
            currentBreakpoint: '',
            state: {
                isMenuVisible: false,
                current: 'Default'
            },
            width: null,
            opacity: null,
            visible: true
        };
    }

    /**
     * Change opacity
     *
     * @param event
     */
    onOpacityClick = (event) => {
        let opacity;
        if (event.target.dataset.opacity === 'up') {
            opacity = this.state.opacity + 20;
            if (opacity > 100) {
                opacity = 100;
            }
        } else if (event.target.dataset.opacity === 'down') {
            opacity = this.state.opacity - 20;
            if (opacity < 0) {
                opacity = 0;
            }
        }

        this.setState({
            opacity,
            visible: opacity > 0
        });
    };

    onHideClick = () => {
        this.setState({
            visible: !this.state.visible
        });
    };

    toggleStateMenu = (event) => {
        if (event.target.tagName === 'LI') {
            return;
        }

        this.setState({
            state: {
                ...this.state.state,
                isMenuVisible: !this.state.state.isMenuVisible
            }
        });
    };

    changeState = (event) => {
        this.setState({
            state: {
                isMenuVisible: false,
                current: event.target.dataset.state
            }
        });
    };

    /**
     * Resize window
     */
    onResize = () => {
        const width = global.window.innerWidth;

        this.setState({
            width,
            currentBreakpoint: getCurrentBreakpoint(width, this.props.breakPoints)
        });
    };

    render() {
        const { templates, component, breakPoints } = this.props;
        const { width, currentBreakpoint, state, visible } = this.state;
        const currentOpacity = this.state.opacity;
        const hideClasses = cx({
            [Styles.hide]: true,
            [Styles.disabled]: currentOpacity === 0
        });

        const StateClasses = cx({
            [Styles.states]: true,
            [Styles.disabled]: !state.isMenuVisible
        });

        const result = templates.find((current) => {
            return typeof current === 'object' && current.name === currentBreakpoint;
        });

        const statesList = result ? result.states.map((current) => {
            return (
                <li key={ current } data-state={ current } onClick={ this.changeState }>{ current }</li>
            );
        }) : null;

        const image = templates.filter((breakPoint) => {
            const bp = typeof breakPoint === 'object' ? breakPoint.name : breakPoint;

            return bp === this.state.currentBreakpoint
                && breakPoints[bp]
                && global.window.innerWidth === breakPoints[bp].template
                && visible;
        }).map((breakPoint) => {
            let filename = breakPoint;

            if (typeof breakPoint === 'object') {
                filename = breakPoint.name;

                if (state.current !== 'Default') {
                    filename += `__${state.current}`;
                }
            }
            const src = `/PixelPerfect/${component}/${filename}.jpg`;

            return (
                <img key={ filename } src={ src }/>
            );
        });

        return (
            <div>
                <div className={ Styles.pixelPerfect }>
                    <div className={ Styles.menu }>
                        <div className={ Styles.items }>
                            <div className={ Styles.item }>
                                <p className={ Styles.title }>Component:</p>
                                <p className={ Styles.value }>{ component }</p>
                            </div>

                            <div className={ Styles.item } onClick={ this.toggleStateMenu }>
                                <p className={ Styles.title }>State:</p>
                                <p className={ Styles.value }>{ state.current }</p>
                                <ul className={ StateClasses }>
                                    { statesList }
                                </ul>
                            </div>

                            <div className={ Styles.item }>
                                <p className={ Styles.title }>Breakpoint:</p>
                                <p className={ Styles.value }>{ currentBreakpoint }</p>
                            </div>

                            <div className={ Styles.item }>
                                <p className={ Styles.title }>Width:</p>
                                <p className={ Styles.value }>{ `${width}px` } </p>
                            </div>

                            <div className={ Styles.item }>
                                <p className={ Styles.title }>Opacity:</p>
                                <span onClick={ this.onOpacityClick } className={ Styles.down } data-opacity="down">
                                    -
                                </span>
                                <p className={ Styles.opacity }>{ currentOpacity }</p>
                                <span onClick={ this.onOpacityClick } className={ Styles.up } data-opacity="up">
                                    +
                                </span>
                            </div>

                            <div className={ Styles.item }>
                                <p onClick={ this.onHideClick } className={ hideClasses }>
                                    { visible ? 'Hide' : 'Show' }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ Styles.component }>
                    <div className={ Styles.wrap } style={ { opacity: currentOpacity / 100 } }>
                        { image }
                    </div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}
