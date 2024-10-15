import { motion } from 'framer-motion';
import React from 'react'
import { Illustrations } from '../../../assets/illustrations/Illustrations';
import { ButtonA } from '../../molecules/buttons/ButtonA';
const {
    AstroHello,
    CuadraDialog,
    AstronauIndica
} = Illustrations


export const ComponentIndications = ({
    dialog1,
    dialog2,
    dialog3,
    setDialog2,
    setDialog3,
    setIndications,
    imageHello,
    setIndicationsAll,
    levels1,
    setValidateSaveProgress,
    dispatch
}) => {
    return (
        <section className='bg-[#00000099] w-full h-[calc(100vh)] absolute z-50 flex justify-start items-end '>

            <div className='xl:w-[32%] w-[40%] flex flex-col'>
                {
                    !levels1 ? (
                        <>
                            {
                                dialog1 && (

                                    <motion.div
                                        initial={{ scale: 0.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2 }}

                                        className=' self-end relative'
                                    >
                                        <div className='z-50 top-9 left-9 absolute flex flex-col gap-2'>
                                            <p className='  text-black'>¡Hola! , Bienvenido a una aventura por el espacio</p>
                                            <ButtonA
                                                text={"Siguiente"}
                                                action={() => setIndications()}
                                                alternativeStyle={"p-[2px] text-sm mt-2 rounded-lg font-bold"}
                                                hoverButton={"hover:bg-[#FB5640]"}
                                                bgButton={"bg-primary-orange1"}
                                                textColor={"text-white"}
                                                withButton={"w-[40%]"}
                                            />
                                        </div>
                                        <img className='w-[250px]' src={CuadraDialog} alt="CuadraDialog" />
                                    </motion.div>
                                )
                            }

                            {
                                dialog2 && (

                                    <motion.div
                                        initial={{ scale: 0.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2 }}

                                        className=' self-end relative'
                                    >
                                        <div className='z-50 top-9 left-7 absolute flex flex-col gap-2'>
                                            <p className=' text-sm  text-black'>Mediante una serie de acertijos que incrementaran su dificultad, podrás avanzar entre los mundos</p>
                                            <ButtonA
                                                text={"Siguiente"}
                                                action={() => { setDialog3(true); setDialog2(false) }}
                                                alternativeStyle={"p-[2px] text-sm mt-2 rounded-lg font-bold"}
                                                hoverButton={"hover:bg-[#FB5640]"}
                                                bgButton={"bg-primary-orange1"}
                                                textColor={"text-white"}
                                                withButton={"w-[40%]"}
                                            />
                                        </div>
                                        <img className='w-[280px]' src={CuadraDialog} alt="CuadraDialog" />
                                    </motion.div>
                                )
                            }

                            {
                                dialog3 && (

                                    <motion.div
                                        initial={{ scale: 0.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2 }}

                                        className=' self-end relative'
                                    >
                                        <div className='z-50 top-9 left-7 absolute flex flex-col gap-2 items-center'>
                                            <p className=' text-sm text-center text-black w-[200px]'>
                                                ¡Buena suerte!
                                                <br />
                                                <br />

                                                Nos vemos!!!
                                            </p>
                                            <ButtonA
                                                text={"Comenzar"}
                                                action={() => setIndicationsAll(false)}
                                                alternativeStyle={"p-[2px] text-sm mt-2 rounded-lg font-bold"}
                                                hoverButton={"hover:bg-[#FB5640]"}
                                                bgButton={"bg-primary-orange1"}
                                                textColor={"text-white"}
                                                withButton={"w-[40%]"}
                                            />
                                        </div>
                                        <img className='w-[280px]' src={CuadraDialog} alt="CuadraDialog" />
                                    </motion.div>
                                )
                            }
                        </>
                    )
                        :
                        <motion.div
                            initial={{ scale: 0.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}

                            className='self-end relative'
                        >
                            <div className='z-50 top-9 left-6 absolute flex flex-col gap-2'>
                                <p className='  text-black '>Podrás guardar tu progreso y deshacer y rehacer niveles</p>
                                <ButtonA
                                    text={"Terminar"}
                                    action={() => { setIndicationsAll(false); dispatch(setValidateSaveProgress(false)) }}
                                    alternativeStyle={"p-[2px] text-sm mt-2 rounded-lg font-bold"}
                                    hoverButton={"hover:bg-[#FB5640]"}
                                    bgButton={"bg-primary-orange1"}
                                    textColor={"text-white"}
                                    withButton={"w-[40%]"}
                                />
                            </div>
                            <img className='w-[250px]' src={CuadraDialog} alt="CuadraDialog" />
                        </motion.div>
                }

                {
                    imageHello ?

                        <motion.img
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ type: "spring", stiffness: 700, damping: 20 }}
                            className=' w-[200px]' src={AstroHello} alt="AstroHello"
                        />
                        :
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 700, damping: 20 }}
                            className='w-[200px]' src={AstronauIndica} alt="AstroHello"
                        />
                }

            </div>

        </section>
    )
}
