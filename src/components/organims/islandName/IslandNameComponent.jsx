import React from 'react'

export const IslandNameComponent = ({
    imageIsland,
    imageName
}) => {
    return (
        <div className='flex flex-col'>
            <img className='w-[200px]' src={imageIsland} alt="imageIsland" />
            <img className='w-[150px] -translate-y-8 translate-x-7' src={imageName} alt="ImageName" />
        </div>
    )
}
