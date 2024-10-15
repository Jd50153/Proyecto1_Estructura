import React from 'react'

export const Island = ({
    image,
    right = true,
    col2 = false,
    active = false,
    alternativeStyle,
    action
}) => {
    return (
        <div
            className={
                `${active ? 'animate-bounce' : 'grayscale'}
             filter flex justify-center items-center 
             ${alternativeStyle} 
             ${col2 ? '' : (right ? ' mr-[170px]' : 'ml-[170px]')} 
             ${col2 && 'col-span-2'}`
            }
        >
            <div>
                <button disabled={!active} onClick={action} className={` w-[200px] ${!active && 'cursor-not-allowed'}`}>
                    <img src={image} alt="imageIsland" />
                </button>
            </div>
        </div>
    )
}
