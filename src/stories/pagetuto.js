import React from 'react';
import PropTypes from 'prop-types';

export const Pagetuto = ({ backgroundColor, borderStyle, borderColor, borderWidth, content }) => {
    const style = {
        background: backgroundColor,
        borderStyle: borderStyle,
        borderColor: borderColor,
        borderWidth: borderWidth,
    }
    return (
        <div style={style}>
            {content}
        </div>
    )
}

Pagetuto.propTypes = {
    backgroundColor: PropTypes.string,
    borderStyle: PropTypes.oneOf(['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']),
    borderColor: PropTypes.string,
    borderWidth: PropTypes.oneOf(['thin', 'medium', 'thick']),
    content: PropTypes.string.isRequired,
}

Pagetuto.defaultProps = {
    backgroundColor: null,
    borderStyle: 'solid',
    borderColor: null,
    borderWidth: 'medium',
    content: '여기에 텍스트 입력...',
}