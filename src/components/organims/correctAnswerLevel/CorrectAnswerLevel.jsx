import React from 'react'
import { Icons } from '../../../assets/icons/IconProvider';
const {
    IconBanana,
    IconFish,
    IconNumber,
    IconName,
    IconIce,
    IconSmoke
} = Icons

export const CorrectAnswerLevel = ({
    levels,
    id
}) => {
    const levelContent = {
        1: {
            text: "Oro parece, plata no es y el que no lo adivine un tonto es.",
            image: IconBanana,
            additionalText: "El platano"
        },
        2: {
            text: "Puede ser increíblemente alto, pero apenas pesa. ¿Qué es?",
            image: IconSmoke,
            additionalText: "El humo"
        },
        3: {
            text: "¿Qué es algo y nada a la vez?",
            image: IconFish,
            additionalText: "El pez"
        },
        4: {
            text: "Lo más duro, pero que no soporta el sol. ¿Qué es?",
            image: IconIce,
            additionalText: "El hielo"
        },
        5: {
            text: "Número de 3 dígitos. El dígito que está en el medio es 4 veces mayor que el tercer y último dígito. Además, el primero es 3 unidades más pequeño que el segundo. ¿Qué número es?",
            image: IconNumber,
            additionalText: "El número 141"
        },
        6: {
            text: "Hay algo que, aunque te pertenezca, la gente siempre lo utiliza más que tú. ¿Qué es?",
            image: IconName,
            additionalText: "Tú nombre"
        }
    };
    const activeLevel = Object.keys(levels).find((level, index) => levels[level] && id === index + 1);
    return (
        <div>
            {activeLevel && (
                <div className='flex justify-center flex-col items-center'>
                    <h1 className='font-bold text-primary-blue1 text-2xl mt-10'>¡En hora buena! , acertijo resuelto</h1>
                    <p className='text-primary-blue1 text-xl mt-[150px] w-[80%] text-center'>{levelContent[id]?.text}</p>
                    <img className='mt-[100px]' src={levelContent[id]?.image} alt={`Level ${id}`} />
                    <p className='font-bold text-primary-blue1 text-2xl mt-10'>{levelContent[id]?.additionalText}</p>
                </div>
            )}
        </div>
    )
}
