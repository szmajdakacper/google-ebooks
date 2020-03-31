import React from 'react'

export default function Books(props) {
    if (props.items.length > 0) {
        const cardStyle = {
            width: '250px',
        };
        const imgStyle = {
            height: '250px',
        };
        const books = props.items.map(book => {
            if (!book.volumeInfo.hasOwnProperty('imageLinks')) {
                Object.assign(book.volumeInfo, { 'imageLinks': { 'thumbnail': '' } });
            }
            return (
                <div key={book.id} className="col-xs-12 col-md-6 col-lg-4 d-flex align-items-stretch mt-2">
                    <div className="card" style={cardStyle}>
                        <img style={imgStyle} className="card-img-top" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <p className="card-text">{book.volumeInfo.subtitle}</p>
                            <a href={book.saleInfo.buyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block mt-auto">Read</a>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row mb-5">
                    {books}
                </div>
            </div>
        )
    } else {
        return null;
    }

}
