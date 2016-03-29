function Bubble(props) {

    return (
        <g>
            <rect
                x={ title.pos.x - 22 }
                y={ title.pos.y + 23 }
                rx={ 6 }
                ry={ 6 }
                width={ 44 }
                height={ 44 }
                fill="#ccc"
            />
            <rect
                x={ title.pos.x - 22 }
                y={ title.pos.y + 20 }
                rx={ 6 }
                ry={ 6 }
                width={ 44 }
                height={ 44 }
                fill="#fff"
            />
            <rect
                x={ title.pos.x - 11 }
                y={ title.pos.y + 20 - 11 + 7 }
                rx={ 3 }
                ry={ 3 }
                width={ 22 }
                height={ 22 }
                transform={ `rotate(45, ${title.pos.x}, ${title.pos.y + 20 + 7})` }
                fill="#fff"
            />
            <text
                x={ title.pos.x }
                y={ title.pos.y + 20 + 32 }
                style={ { textAnchor: 'middle', fontSize: '28px', fontFamily: 'PTSans-bold', fill: '#f9c90f' } }
            >
                44
            </text>
        </g>
    );
}
