import React from 'react'
import { Icons } from '../../../assets/icons/IconProvider'
const { IconBack } = Icons

export const GoBack = ({ action }) => {
    return (
        <button
            className='w-[40px] cursor-pointer'
            onClick={action}
        >
            <img src={IconBack} alt="IconBack" />
        </button>
    )
}
