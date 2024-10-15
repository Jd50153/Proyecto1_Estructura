import React, { useEffect, useState } from 'react'
import { Illustrations } from '../../assets/illustrations/Illustrations'
import { ChooseFile } from '../../components/molecules/input/ChooseFile'
import { ButtonA } from '../../components/molecules/buttons/ButtonA'
import { motion } from 'framer-motion'
import { GoBack } from '../../components/molecules/goBack/GoBack'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { resetGame, setGameProgress, setValidateIndications, setValidateSaveProgress } from '../../redux/gameSlice/GameSlice'
import { useDispatch } from 'react-redux'
import { AlertFile } from '../../components/molecules/alert/AlertFile'
import { Icons } from '../../assets/icons/IconProvider'
const { ImageMoon, AstronautUpload } = Illustrations
const { IconSuccesUpload } = Icons

export const UploadFileView = ({ setHasStartedGame }) => {

    const [infoFile, setInfoFile] = useState()
    const [selectFile, setSelectFile] = useState();
    const [preview, setPreview] = useState();
    const [alertTxt, setAlertTxt] = useState(false);
    const [uploadFileView, setUploadFileView] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const navigateHome = () => {
        navigate(routes.HOME)
    }

    const setLevelsAndCompletedLevels = (levels, completedLevels) => {
        dispatch(setGameProgress({ levels, completedLevels }));
    };

    const goToGameFromFile = () => {
        setHasStartedGame(true)
        dispatch(setValidateSaveProgress(false))
        dispatch(setValidateIndications(false))

        const url = routes.WORLDSTEPS
        const state = {
            file: true
        }
        navigate(url, { state })
    }

    useEffect(() => {

        if (alertTxt) {
            setTimeout(() => {
                setAlertTxt(false)
            }, 4000);
        }

    }, [alertTxt])

    return (
        <article className='h-[calc(100vh)] overflow-hidden bg-primary-blue1 relative grid place-items-center w-full'>
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

                {
                    uploadFileView ?
                        <motion.div
                            className='flex flex-col items-center gap-12 h-[300px]'
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ type: "spring", stiffness: 700, damping: 20 }}
                        >
                            <img className='w-[120px]' src={IconSuccesUpload} alt="IconSuccesUpload" />
                            <p>Progreso cargado correctamente en el juego</p>
                            <ButtonA
                                text={"Ir"}
                                action={() => goToGameFromFile()}
                                hoverButton={"hover:bg-[#FB5640]"}
                                bgButton={"bg-primary-orange1"}
                                textColor={"text-white"}
                                withButton={"w-[40%]"}
                            />
                        </motion.div>
                        :
                        <>

                            <h1 className='font-bold text-primary-blue1 text-xl'>Cargar progreso</h1>
                            <p className='text-primary-blue1 xl:text-base text-sm mt-4 w-[80%] mb-5'>Acá  podrás subir el archivo que haz descargado al guardar tu progreso en el juego</p>
                            <ChooseFile
                                setInfoFile={setInfoFile}
                                selectFile={selectFile}
                                setSelectFile={setSelectFile}
                                preview={preview}
                                setPreview={setPreview}
                                setLevelsAndCompletedLevels={setLevelsAndCompletedLevels}
                                resetGame={resetGame}
                                dispatch={dispatch}
                                setAlertTxt={setAlertTxt}
                            />
                            {
                                alertTxt && (
                                    <AlertFile />
                                )
                            }
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
                                            action={() => setUploadFileView(true)}
                                            hoverButton={"hover:bg-[#FB5640]"}
                                            bgButton={"bg-primary-orange1"}
                                            textColor={"text-white"}
                                            withButton={"w-[40%]"}
                                        />
                                    </motion.div>
                                )
                            }
                        </>
                }
            </motion.section>
        </article>
    )
}
