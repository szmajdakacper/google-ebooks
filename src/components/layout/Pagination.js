import React from 'react'

export default function Pagination(props) {
    if (props.itemsAmount > 0) {

        const leftArrowStyle = {
            position: 'absolute',
            left: '10px',
            top: '250px',
        }
        const rightArrowStyle = {
            position: 'absolute',
            right: '10px',
            top: '250px',
        }

        return (
            <nav>
                <a onClick={(event) => props.changePageHandler(event, props.currentPage - 1)} href="!#">
                    <i style={leftArrowStyle} className="fas fa-arrow-circle-left fa-5x"></i>
                </a>
                <a onClick={(event) => props.changePageHandler(event, props.currentPage + 1)} href="!#">
                    <i style={rightArrowStyle} className="fas fa-arrow-circle-right fa-5x"></i>
                </a>
            </nav>
        )
    } else {
        return null;
    }

}
