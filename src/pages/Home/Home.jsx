import React, { useEffect } from 'react'
import { ButtonA } from '../../components/molecules/buttons/ButtonA'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { motion } from 'framer-motion'
import { resetGame } from '../../redux/gameSlice/GameSlice'
import { useDispatch } from 'react-redux'


export const Home = ({ setHasStartedGame }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const navigateUploadFile = () => {
        navigate(routes.UPLOADFILE)
    }

    const handleStartGame = () => {
        setHasStartedGame(true);
    };

    const navigateWorlds = () => {
        navigate(routes.WORLDSTEPS)
        handleStartGame()
    }
    useEffect(() => {
        setHasStartedGame(false);
        dispatch(resetGame())
    }, [])


    return (
        <article className=' grid grid-cols-2 h-[calc(100vh)] overflow-hidden'>
            <article
                style={{
                    background: `url(https://cdn.wallpapersafari.com/18/9/uRQOg4.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                className=' bg-black'
            >
            </article>
            <article className=' bg-primary-blue1 grid place-items-center'>
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ type: "spring", stiffness: 700, damping: 20 }}
                    className=' w-[80%] text-center flex flex-col gap-8'
                >
                    <h1 className='text-primary-gris1 font-bold xl:text-4xl text-2xl'>Bienvenidos</h1>
                    <p className='text-primary-gris1 font-thin text-xl'>Una aventura en el cosmos</p>
                    <div className='flex flex-col items-center w-full gap-10'>

                        <ButtonA
                            text={"Iniciar juego"}
                            action={navigateWorlds}
                            hoverButton={"hover:bg-[#859ab6]"}
                            bgButton={"bg-primary-blue4"}
                            textColor={"text-white"}
                            withButton={"w-[40%]"}
                        />
                        <ButtonA
                            text={"Cargar progreso"}
                            action={navigateUploadFile}
                            hoverButton={"hover:bg-[#859ab6]"}
                            bgButton={"bg-primary-blue4"}
                            textColor={"text-white"}
                            withButton={"w-[40%]"}
                        />
                    </div>
                </motion.section>
            </article>
        </article>
    )
}
