import React from 'react'
// import { truncateText } from '../../../../hooks/useTruncateText';

export const TypeFile = ({
    selectFile,
    AddImageDefault,
}) => {
    if (selectFile?.type === "text/plain") {
        return (
            <div className="flex items-center gap-3">
                {/* <p>{truncateText(selectFile?.name, 40)}</p> */}
                <p>{selectFile?.name}</p>
            </div>
        );
    }

    return <img className='w-[30px]' src={AddImageDefault} alt="Imagen predeterminada" />;
};


