import React from 'react'

export const TextareaSimple = ({ register, nameRegister }) => {
    return (
        <textarea
            className='border border-primary-blue1 rounded-md w-full h-[50%] outline-none p-2'
            {...register(nameRegister)}
        />
    )
}
