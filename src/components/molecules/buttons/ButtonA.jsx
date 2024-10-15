import React from 'react'

export const ButtonA = ({
    text,
    action,
    bgButton,
    textColor,
    withButton,
    hoverButton,
    alternativeStyle = 'font-bold rounded-lg p-2',
    submit = false,
    disabled,
    img
}) => {
    return (
        <button
            className={` ${bgButton} ${textColor} ${withButton} ${alternativeStyle} ${hoverButton}`}
            onClick={action}
            type={submit ? 'submit' : 'button'}
            disabled={disabled}
        >
            {text}
            {
                img && (
                    <img className='w-5' src={img} alt="icon" />
                )
            }
        </button>
    )
}
