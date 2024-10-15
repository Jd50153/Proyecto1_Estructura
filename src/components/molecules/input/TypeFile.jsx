import React from 'react'

export const TypeFile = ({
    selectFile,
    AddImageDefault,
}) => {
    if (selectFile?.type === "text/plain") {
        return (
            <div className="flex items-center gap-3">
                <p>{selectFile?.name}</p>
            </div>
        );
    }

    return <img className='w-[30px]' src={AddImageDefault} alt="Imagen predeterminada" />;
};


