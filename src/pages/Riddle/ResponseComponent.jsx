import React from 'react'
import { Icons } from '../../assets/icons/IconProvider'
import { ButtonA } from '../../components/molecules/buttons/ButtonA'
import { motion } from 'framer-motion'

const {
  IconCheck,
  IconFail
} = Icons

export const ResponseComponent = ({
  correct,
  setCorrect,
  navigateStepsModal
}) => {
  return (
    <div className='grid place-items-center h-full'>
      <div className='flex items-center flex-col gap-10'>
        <motion.figure
          exit={{ scale: 0.1 }}
          transition={{ type: "spring", stiffness: 700, damping: 20 }}
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
        >
          <img src={correct ? IconCheck : IconFail} alt="IconCheck" />
        </motion.figure>
        <p className=' text-primary-blue1 font-bold text-sm xl:text-2xl'>{correct ? '¡Felicidades!' : '¡Ups¡'}</p>
        <p className=' text-primary-blue1 text-sm xl:text-xl'>{correct ? 'Respuesta correcta' : 'Respuesta incorrecta'}</p>
        <ButtonA
          text={correct ? "Avanzar" : "Volver a intentarlo"}
          action={correct ? () => navigateStepsModal() : () => setCorrect(null)}
          hoverButton={"hover:bg-[#FB5640]"}
          bgButton={"bg-primary-orange1"}
          textColor={"text-white"}
          withButton={"w-[100%]"}
        />
      </div>
    </div>
  )
}
