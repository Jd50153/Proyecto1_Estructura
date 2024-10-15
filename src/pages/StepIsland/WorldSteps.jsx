import React, { useEffect, useState } from 'react'
import { Illustrations } from '../../assets/illustrations/Illustrations'
import { GoBack } from '../../components/molecules/goBack/GoBack'
import { Island } from '../../components/organims/islands/Island'
import { ComponentIndications } from '../../components/organims/indications/ComponentIndications'
import { ModalAlert } from '../../components/organims/modal/ModalAlert'
import { routes } from '../../routes/routes'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { redo, resetGame, setValidateIndications, setValidateSaveProgress, setValidateUndoRedo, undo } from '../../redux/gameSlice/GameSlice'
import { ButtonA } from '../../components/molecules/buttons/ButtonA'
import { Icons } from '../../assets/icons/IconProvider'
import { saveProgressToTxt } from '../../redux/gameAction/saveProgressAction'
import { ModalWin } from '../../components/organims/modal/ModalWin'

const {
    IconClick,
    IconDownLoad,
    IconArrowBack,
    IconArrowNext
} = Icons

const {
    BgStepsAventure,
    IslandFruit,
    IslandFish,
    IslandIce,
    IslandName,
    IslandNumber,
    IslandSmoke,
} = Illustrations

export const WorldSteps = () => {

    const {
        levels,
        validateIndications,
        completedLevels,
        validateSaveProgress,
        validateUndoRedo
    } = useSelector(state => state.persistedData)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [dialog1, setDialog1] = useState(false)
    const [dialog2, setDialog2] = useState(false)
    const [dialog3, setDialog3] = useState(false)
    const [imageHello, setImageHello] = useState(true)
    const [indicationsAll, setIndicationsAll] = useState(true)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenModalWin, setIsOpenModalWin] = useState(false)


    const navigateRiddle = (id) => {
        const url = routes.RIDDLE
        const state = {
            id: id
        }
        dispatch(setValidateIndications(false))
        navigate(url, { state })
    }


    const stepsAdventure = [
        { id: 1, action: () => navigateRiddle(1), name: "Fruit", illustration: IslandFruit, active: levels?.level1, completed: completedLevels?.complete1 },
        { id: 2, action: () => navigateRiddle(2), name: "Smoke", illustration: IslandSmoke, active: levels?.level2, completed: completedLevels?.complete2 },
        { id: 3, action: () => navigateRiddle(3), name: "Fish", illustration: IslandFish, active: levels?.level3, completed: completedLevels?.complete3 },
        { id: 4, action: () => navigateRiddle(4), name: "Ice", illustration: IslandIce, active: levels?.level4, completed: completedLevels?.complete4 },
        { id: 5, action: () => navigateRiddle(5), name: "Number", illustration: IslandNumber, active: levels?.level5, completed: completedLevels?.complete5 },
        { id: 6, action: () => navigateRiddle(6), name: "Name", illustration: IslandName, active: levels?.level6, completed: completedLevels?.complete6 }
    ];

    const setIndications = () => {
        setImageHello(false)
        setDialog2(true)
        setDialog1(false)
    }
    const navigateHomeModal = () => {
        setIsOpenModal(true)
    }


    const verificarNiveles = (niveles, nivelActual) => {
        if (nivelActual === 1) {
            return true;
        }

        const nivelAnterior = niveles[nivelActual - 1];

        if (nivelAnterior && nivelAnterior.completed) {
            return true;
        }

        return false;
    };

    const goToHome = () => {
        dispatch(resetGame())
        navigate(routes.HOME)
        dispatch(setValidateIndications(true))
    }

    const handleUndo = () => {
        dispatch(undo());
    };

    const handleRedo = () => {
        dispatch(redo());
    };

    const saveProgressAction = () => {
        saveProgressToTxt(levels, completedLevels)
    }

    useEffect(() => {
        if (indicationsAll && validateIndications) {

            setTimeout(() => {
                setDialog1(true)
            }, 2000);
        }
    }, [])

    useEffect(() => {
        if (levels?.level1 && validateSaveProgress) {
            dispatch(setValidateIndications(true))

        }
        if (levels?.level1) {
            dispatch(setValidateUndoRedo(true))

        }
    }, [levels, validateSaveProgress])

    useEffect(() => {

        levels?.level6 && setIsOpenModalWin(true)

    }, [levels])

    return (
        <article className='h-[calc(100vh)] relative grid place-items-center'>
            {
                indicationsAll && validateIndications && (
                    <ComponentIndications
                        dialog1={dialog1}
                        dialog2={dialog2}
                        dialog3={dialog3}
                        setDialog2={setDialog2}
                        setDialog3={setDialog3}
                        setIndications={setIndications}
                        imageHello={imageHello}
                        setIndicationsAll={setIndicationsAll}
                        levels1={levels?.level1}
                        setValidateSaveProgress={setValidateSaveProgress}
                        dispatch={dispatch}
                    />

                )
            }
            <img src={BgStepsAventure} className=' absolute -z-10' alt="" />
            <div className='fixed top-3 left-3'>
                <GoBack action={() => navigateHomeModal()} />
            </div>
            {
                levels?.level1 && (
                    <div className='fixed top-3 right-3 z-50'>
                        <ButtonA
                            text={"Guardar progreso"}
                            action={() => saveProgressAction()}
                            hoverButton={"hover:bg-[#FB5640]"}
                            bgButton={"bg-primary-orange1"}
                            textColor={"text-white"}
                            alternativeStyle='font-bold rounded-lg p-2 flex gap-3 items-center justify-center'
                            img={IconDownLoad}
                            withButton={'w-[200px]'}
                        />
                        {
                            validateSaveProgress && (

                                <img className='w-8 translate-x-28 -translate-y-3' src={IconClick} alt="IconClick" />
                            )
                        }
                    </div>
                )
            }
            <section className='w-[60%] h-full grid grid-cols-2 grid-rows-4 gap-5 mr-10'>
                {
                    validateUndoRedo && (

                        <div className='fixed top-24 flex flex-col gap-5 right-3 z-50'>
                            <ButtonA
                                text={"Deshacer nivel"}
                                action={!validateSaveProgress && handleUndo}
                                hoverButton={"hover:bg-[#778DB6]"}
                                bgButton={"bg-primary-blue4"}
                                alternativeStyle='font-bold rounded-lg p-2 flex gap-3 items-center justify-center'
                                textColor={"text-white"}
                                withButton={'w-[200px]'}
                                img={IconArrowBack}

                            />
                            <ButtonA
                                text={"Rehacer nivel"}
                                action={!validateSaveProgress && handleRedo}
                                hoverButton={"hover:bg-[#415A70]"}
                                alternativeStyle='font-bold rounded-lg p-2 flex gap-3 items-center justify-center'
                                bgButton={"bg-primary-blue3"}
                                textColor={"text-white"}
                                withButton={'w-[200px]'}
                                img={IconArrowNext}


                            />
                        </div>
                    )
                }

                {
                    stepsAdventure?.map((data, index) => (
                        <Island
                            action={data?.action}
                            key={data?.id}
                            image={data?.illustration}
                            col2={index === 0 || index === 5 ? true : false}
                            active={verificarNiveles(stepsAdventure, data?.id)}
                            right={index === 2 || index === 4 ? false : true}
                            alternativeStyle={`${index === 3 ? 'mt-10 mr-20' : 'mt-10 ml-20'} ${index === 4 && 'mt-10 ml-20'}`}
                        />
                    ))
                }
            </section>
            <ModalAlert
                isOpen={isOpenModal}
                closeModal={() => setIsOpenModal(false)}
                actionSecconButton={() => goToHome()}
            />
            <ModalWin
                isOpen={isOpenModalWin}
                closeModal={() => setIsOpenModalWin(false)}
                actionSecconButton={() => goToHome()}
            />
        </article>
    )
}
