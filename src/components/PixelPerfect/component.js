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
        return currentWidth >= breakPoints[bp].min && currentWidth <= breakPoints[bp].max;
    });

    return breakPoint;
}

export default class PixelPerfect extends Component {
    static propTypes = {
        component: PropTypes.string.isRequired,
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
        const { templates, component, opacity, breakPoints } = this.props;
        const { width, currentBreakpoint, visible } = this.state;
        const currentOpacity = this.state.opacity;
        const hideClasses = cx({
            [Styles.hide]: true,
            [Styles.disabled]: currentOpacity === 0
        });

        const images = templates.map((breakPoint) => {
            const src = `/PixelPerfect/${component}/${breakPoint}.png`;
            const classes = cx({
                [Styles.visible]:
                    breakPoint === this.state.currentBreakpoint
                    && breakPoints[breakPoint]
                    && global.window.innerWidth === breakPoints[breakPoint].template
                    && visible
            });

            return (
                <img key={ breakPoint } src={ src } className={ classes }/>
            );
        });

        return (
            <div className={ Styles.pixelPerfect }>
                <div className={ Styles.menu }>
                    <div className={ Styles.items }>
                        <div className={ Styles.item }>
                            <p className={ Styles.title }>Component name:</p>
                            <p className={ Styles.value }>{ component }</p>
                        </div>

                        <div className={ Styles.item }>
                            <p className={ Styles.title }>Current media breakpoint:</p>
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
                <div className={ Styles.wrap } style={ { opacity: currentOpacity / 100 } }>
                    { images }
                </div>
            </div>
        );
    }
}
