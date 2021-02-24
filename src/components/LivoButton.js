import React from 'react';
import Styles from '../scss/livo-button.module.scss'

function LivoButton({ type, text, children, textType, number, subscript, subscriptType, image, expanded }) {
    return (
        <button 
            className={`
                ${!image ? `
                    button is-rounded is-relative mx-1 is-${type} 
                    ${!text && children ? Styles.iconButton : ''}
                    ${expanded ? 'is-fullwidth' : ''}
                ` : '' }
                ${image ? `p-0 ${Styles.hasImage}` : '' }
            `}
        >
            {number !== undefined && number !== null && <span className={Styles.count}>{number}</span> }
            <span className={`${text && children ? Styles.hasSpacing : ''}`}>{children}</span>
            <span className={`has-text-${textType} has-text-weight-bold`}>{ text }</span>
            <sub className={`has-text-${subscriptType} ${Styles.sub}`}>{subscript}</sub>
            {image && <img src={image} alt={image} />}
        </button>
    );
}

export default LivoButton;