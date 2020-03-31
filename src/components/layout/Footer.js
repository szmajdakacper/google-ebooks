import React from 'react'

export default function Footer() {
    const footerStyle = {
        backgroundColor: 'darkgrey',
        height: '15px',
        marginTop: '15px',
        fontSize: '10px',
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
    }
    return (
        <div style={footerStyle}>
            site: https://szmajdakacper.eu/ , github: https://github.com/szmajdakacper/google-ebooks , Google-Ebooks<span>&copy;</span>
        </div>
    )
}
