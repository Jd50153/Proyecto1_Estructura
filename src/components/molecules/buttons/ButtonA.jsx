import React from 'react'

export const ButtonA = ({
    text,
    action,
    bgButton,
    textColor,
    withButton,
    hoverButton
}) => {
    return (
        <button
            className={` ${bgButton} ${textColor} p-2 ${withButton} font-bold rounded-lg ${hoverButton}`}
            onClick={action}
        >
            {text}
        </button>
    )
}
