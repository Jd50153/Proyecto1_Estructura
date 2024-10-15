import React from 'react'
import { Icons } from '../../../assets/icons/IconProvider'
import { ButtonA } from '../../molecules/buttons/ButtonA'
const { CloseIcon, IconWarning } = Icons

export const ModalAlert = ({
    closeModal,
    actionSecconButton,
    isOpen
}) => {
    return (
        <>
            {
                isOpen && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-[#00000090] font-Sora overflow-hidden'>
                        <div className="min-h-1/2 bg-white bg-no-repeat bg-0 bg-0 bg-padding-box p-8 rounded-lg">
                            <div className="flex justify-end">
                                <button
                                    data-testid='buttonCloseModalTestId'
                                    onClick={() => closeModal()}
                                >
                                    <img
                                        className="w-5 h-5 cursor-pointer  rounded-full opacity-50 hover:opacity-100"
                                        alt="CloseIcon"
                                        src={CloseIcon}
                                    />
                                </button>
                            </div>
                            <div className="flex flex-col items-center p-4">
                                <img className='w-20' src={IconWarning} alt="IconWarning" />
                                <p className="text-sm mb-4 font-bold text-primary-blue1">¿Estás seguro de salir?</p>
                                <p className="text-sm mb-4  text-primary-blue1">Deberas volver a cargar tu progreso</p>
                            </div>
                            <div className=' flex justify-center gap-4'>
                                <ButtonA
                                    text={"Cancelar"}
                                    action={() => closeModal()}
                                    hoverButton={"hover:bg-[#859ab6]"}
                                    bgButton={"bg-primary-blue4"}
                                    textColor={"text-white"}
                                    withButton={"w-[40%]"}
                                    alternativeStyle={"p-1 text-sm mt-2 rounded-md font-bold"}

                                />
                                <ButtonA
                                    text={"Salir"}
                                    action={actionSecconButton}
                                    hoverButton={"hover:bg-[#FB5640]"}
                                    bgButton={"bg-primary-orange1"}
                                    textColor={"text-white"}
                                    withButton={"w-[40%]"}
                                    alternativeStyle={"p-1 text-sm mt-2 rounded-md font-bold"}

                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}
