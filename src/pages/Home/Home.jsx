import React from 'react'
import { ButtonA } from '../../components/molecules/buttons/ButtonA'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { motion } from 'framer-motion'


export const Home = () => {
    const navigate = useNavigate()
    const navigateUploadFile = () => {
        navigate(routes.UPLOADFILE)
    }
    return (
        <body className=' grid grid-cols-2 h-[calc(100vh)] overflow-hidden'>
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
                            // action={""}
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
        </body>
    )
}
