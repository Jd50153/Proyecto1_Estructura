import React from 'react'
import { ButtonA } from '../../molecules/buttons/ButtonA'
import { Icons } from '../../../assets/icons/IconProvider'
const { CloseIcon , IconCongratulations , GifSerpentinas } = Icons

export const ModalWin = ({
    isOpen,
    closeModal,
    actionSecconButton
}) => {
    return (
        <>
            {
                isOpen && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-[#00000090] font-Sora overflow-hidden'>
                        <div className="min-h-1/2 bg-white bg-no-repeat bg-0 bg-0 bg-padding-box p-8 rounded-lg w-[40%] relative">
                        <img className='absolute top-0 z-50 -right-12' src={GifSerpentinas} alt="GifSerpentinas" />
                        <img className='absolute top-[200px] z-50 -right-12' src={GifSerpentinas} alt="GifSerpentinas" />
                        <img className='absolute top-0 z-50 -left-12' src={GifSerpentinas} alt="GifSerpentinas" />
                        <img className='absolute top-[200px] z-50 -left-12' src={GifSerpentinas} alt="GifSerpentinas" />

                            <div className="flex flex-col items-center p-4">
                                <img className='w-[180px]' src={IconCongratulations} alt="iconWin" />
                                <p className="text-xl mb-4 font-bold text-primary-blue1">¡Felicidades!</p>
                                <p className="text-xl mb-4  text-primary-blue1">Haz completado todo el juego</p>
                            </div>
                            <div className=' flex justify-center gap-4'>
                                <ButtonA
                                    text={"Cerrar"}
                                    action={() => closeModal()}
                                    hoverButton={"hover:bg-[#859ab6]"}
                                    bgButton={"bg-primary-blue4"}
                                    textColor={"text-white"}
                                    withButton={"w-[40%]"}
                                    alternativeStyle={"p-2 text-sm mt-2 rounded-md font-bold"}

                                />
                                <ButtonA
                                    text={"Nuevo juego"}
                                    action={actionSecconButton}
                                    hoverButton={"hover:bg-[#FB5640]"}
                                    bgButton={"bg-primary-orange1"}
                                    textColor={"text-white"}
                                    withButton={"w-[40%]"}
                                    alternativeStyle={"p-2 text-sm mt-2 rounded-md font-bold"}

                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
