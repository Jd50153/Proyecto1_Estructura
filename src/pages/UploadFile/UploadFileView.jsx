import React, { useState } from 'react'
import { Illustrations } from '../../assets/illustrations/Illustrations'
import { ChooseFile } from '../../components/molecules/input/ChooseFile'
import { ButtonA } from '../../components/molecules/buttons/ButtonA'
import { motion } from 'framer-motion'
import { GoBack } from '../../components/molecules/goBack/GoBack'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes/routes'
const { ImageMoon, AstronautUpload } = Illustrations

export const UploadFileView = () => {
    const [infoFile, setInfoFile] = useState()
    const [selectFile, setSelectFile] = useState();
    const [preview, setPreview] = useState();

    const navigate = useNavigate()

    const navigateHome = () => {
        navigate(routes.HOME)
    }
    return (
        <body className='h-[calc(100vh)] overflow-hidden bg-primary-blue1 relative grid place-items-center w-full'>
            <img className='w-[250px] absolute top-0 left-0 ' src={ImageMoon} alt="ImageMoon" />
            <motion.section
                className=' bg-primary-gris1 w-[40%] h-auto rounded-[28px] p-10 relative'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 700, damping: 20 }}
            >
                <div className=' absolute -top-16 left-0'>
                    <GoBack action={navigateHome} />
                </div>
                <img className='w-[180px] absolute -top-[70px] -right-[120px] animate-bounce' src={AstronautUpload} alt="" />
                <h1 className='font-bold text-primary-blue1 text-xl'>Cargar progreso</h1>
                <p className='text-primary-blue1 xl:text-base text-sm mt-4 w-[80%] mb-5'>Acá  podrás subir el archivo que haz descargado al guardar tu progreso en el juego</p>
                <ChooseFile
                    setInfoFile={setInfoFile}
                    selectFile={selectFile}
                    setSelectFile={setSelectFile}
                    preview={preview}
                    setPreview={setPreview}
                />
                {
                    selectFile && (

                        <motion.div
                            className='flex xl:flex-row flex-col justify-center gap-4 mt-8'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ type: "spring", stiffness: 700, damping: 20 }}
                        >
                            <ButtonA
                                text={"Cargar"}
                                // action={""}
                                hoverButton={"hover:bg-[#859ab6]"}
                                bgButton={"bg-primary-orange1"}
                                textColor={"text-white"}
                                withButton={"w-[40%]"}
                            />
                        </motion.div>
                    )
                }
            </motion.section>
        </body>
    )
}
