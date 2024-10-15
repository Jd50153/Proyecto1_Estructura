import React, { useEffect, useState } from 'react'
import { Illustrations } from '../../assets/illustrations/Illustrations'
import { GoBack } from '../../components/molecules/goBack/GoBack'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { IslandNameComponent } from '../../components/organims/islandName/IslandNameComponent'
import { Icons } from '../../assets/icons/IconProvider'
import { motion } from 'framer-motion'
import { TextareaSimple } from '../../components/molecules/textarea/TextareaSimple'
import { ButtonA } from '../../components/molecules/buttons/ButtonA'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { addResponse, redo, undo, unlockLevel } from '../../redux/gameSlice/GameSlice'
import { riddlesList } from './ListRiddle'
import { ResponseComponent } from './ResponseComponent'
import { CorrectAnswerLevel } from '../../components/organims/correctAnswerLevel/CorrectAnswerLevel'

const {
    BgStepsAventure,
    AstronautAcertijo,
    CuadraDialog
} = Illustrations
const { IconQuestion } = Icons



export const ComponentRiddle = () => {

    const { levels } = useSelector(state => state.persistedData)


    const { state: { id } } = useLocation()
    const { register, watch, handleSubmit } = useForm()
    const answer = watch()

    const [textRiddle, setTextRiddle] = useState('')
    const [imageIsland, setImageIsland] = useState('')
    const [imageNameIsland, setImageNameIsland] = useState('')
    const [dialog, setDialog] = useState(false)
    const [correct, setCorrect] = useState(null)

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const navigateStepsModal = () => {
        navigate(routes.WORLDSTEPS)
    }

    const correctAnswers = {
        1: "platano",
        2: "humo",
        3: "pez",
        4: "hielo",
        5: "141",
        6: "nombre"
    };

    const normalizeText = (text) => {
        const textEnd = text?.answer
        if (!textEnd) return '';

        let normalizedText = textEnd
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const unwantedWords = ["el", "la", "los", "las", "un", "una", "unos", "unas"];
        normalizedText = normalizedText
            .split(" ")
            .filter(word => !unwantedWords.includes(word))
            .join(" ")
            .trim();

        return normalizedText;
    };

    const handleValidateResponse = () => {
        const normalizedUserResponse = normalizeText(answer);
        const correctAnswer = correctAnswers[id].toLowerCase();

        if (normalizedUserResponse.includes(correctAnswer)) {
            dispatch(addResponse({ id, response: answer }));
            dispatch(unlockLevel(`level${id}`));
            setCorrect(true)
        } else {
            setCorrect(false)

        }
    };

    const isAnyLevelTrue = Object.values(levels).some(level => level === true);
    const returComponentsOptions = () => {

        if (correct != null) {
            return (
                <ResponseComponent
                    correct={correct}
                    setCorrect={setCorrect}
                    navigateStepsModal={navigateStepsModal}
                />
            );
        }

        if (isAnyLevelTrue && levels[`level${id}`]) {
            return <CorrectAnswerLevel id={id} levels={levels} />;
        }

        return (
            <>
                <h1 className='font-bold text-primary-blue1 text-xl'>Responder acertijo</h1>
                <p className='text-primary-blue1 text-base mt-8 mb-10'>
                    Acá podrás responder el acertijo, para avanzar por los mundos. Piensatelo muy bien.
                </p>

                <TextareaSimple nameRegister={'answer'} register={register} />
                <div className='mt-8 flex justify-center'>
                    <ButtonA
                        text={"Validar respuesta"}
                        hoverButton={"hover:bg-[#FB5640]"}
                        bgButton={"bg-primary-orange1"}
                        textColor={"text-white"}
                        withButton={"w-[40%]"}
                        submit={true}
                    />
                </div>
                <img className='absolute w-[60px] bottom-0 rotate-[30deg] -left-7' src={IconQuestion} alt="IconQuestion" />
                <img className='absolute w-[60px] -top-5 right-10' src={IconQuestion} alt="IconQuestion" />
                <img className='absolute w-[60px] -bottom-5 right-0' src={IconQuestion} alt="IconQuestion" />
            </>
        );
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDialog(true);
        }, 2000);

        const currentRiddle = riddlesList.find(riddle => riddle.id === id);

        if (currentRiddle) {
            setImageIsland(currentRiddle.imageIsland);
            setImageNameIsland(currentRiddle.imageNameIsland);
            setTextRiddle(currentRiddle.textRiddle);
        } else {
            console.error("No se encontró la referencia, vuelve a la página de inicio");
        }

        return () => clearTimeout(timer);

    }, []);


    return (
        <article className='h-[100vh] relative grid place-items-center'>
            <img src={BgStepsAventure} className=' h-full object-cover w-full absolute -z-10' alt="BgStepsAventure" />
            <div className='fixed top-3 left-3'>
                <GoBack action={() => navigateStepsModal()} />
            </div>
            <section className=' w-full mt-16 h-[calc(100vh-10vh)] flex'>
                <div className='w-1/2 flex- flex-col'>
                    <div className='h-1/2 w-full grid place-items-center'>
                        <IslandNameComponent
                            imageIsland={Illustrations[`${imageIsland}`]}
                            imageName={Icons[`${imageNameIsland}`]}
                        />
                    </div>
                    <div className='h-1/2 relative w-[65%] flex flex-col'>
                        {
                            dialog && (

                                <motion.div
                                    initial={{ scale: 0.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className=' self-end relative'
                                >
                                    {
                                        isAnyLevelTrue && levels[`level${id}`] ?
                                        <img className='top-12 left-[82px] absolute w-16' src={IconQuestion} alt="IconQuestion" /> 
                                        :

                                            <div className='z-50 top-8 left-9 absolute flex flex-col gap-2'>
                                                <p className='  text-black w-[80%] pr-3  h-[100px] overflow-y-auto'>{textRiddle}</p>
                                            </div>
                                    }
                                    <img className='w-[250px]' src={CuadraDialog} alt="CuadraDialog" />
                                </motion.div>
                            )
                        }
                        <img className=' bottom-0 absolute max-w-[220px]' src={AstronautAcertijo} alt="AstronautAcertijo" />
                    </div>
                </div>
                <div className='w-1/2 '>
                    <form
                        className='bg-white w-[95%] h-[95%] rounded-lg p-10 relative'
                        onSubmit={handleSubmit(handleValidateResponse)}

                    >
                        {returComponentsOptions()}
                    </form>
                </div>
            </section>
        </article>
    )
}
