import React, { useEffect, useState } from 'react'
import { TypeFile } from './TypeFile'
import { Icons } from '../../../assets/icons/IconProvider';
const { IconUpload , IconTxt } = Icons

export const ChooseFile = ({
    setInfoFile,
    setAlertTxt,
    deleteFile = true,
    selectFile,
    setSelectFile,
    preview,
    setPreview

}) => {
    

    const handleDelete = () => {
        setSelectFile("");
        setPreview("");
    };

    const onSelectFile = async (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectFile(undefined);
            return;
        }
        const file = e.target.files[0];

        if (file.type !== "text/plain") {
            setAlertTxt(true);
            handleDelete();
            return;
        }

        setSelectFile(file);
        setInfoFile(file)


    };

    useEffect(() => {
        if (selectFile) {

            if (selectFile?.type !== "text/plain") {
                handleDelete();
                setAlertTxt(true);
            }
        }
    }, [selectFile]);

    return (
        <div>
            <label htmlFor={`file-input`} className={`cursor-pointer border-2 ${!selectFile ? "gap-3" : ""} rounded-lg flex justify-center h-[170px] items-center relative overflow-hidden bg-white shadow-lg`}>
                {
                    selectFile && (

                        <img className='w-[50px]' src={IconTxt} alt="IconTxt" />
                    )
                }
                <div>
                    <TypeFile selectFile={selectFile} preview={preview} AddImageDefault={IconUpload} />
                </div>
                {
                    !selectFile && (

                        <div className='flex flex-col'>
                            <h1 className='font-bold text-primary-blue1 text-sm'>Click aquí</h1>
                            <p className='text-primary-blue1 text-sm'>Sube tu archivo .txt</p>
                        </div>
                    )
                }
            </label>
            <input id={`file-input`} className="hidden" type="file" accept=".txt" onChange={(e) => onSelectFile(e)} />
            {selectFile && (
                <div className={`flex items-center ${selectFile?.type === "text/plain" && "justify-end"}`}>
                    {deleteFile && (
                        <button id="button-delete-file" type="button" className="mt-2 flex gap-2 text-red-600" onClick={() => handleDelete()}>
                            Remover archivo
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9L14.4 18m-4.79 0L9.26 9m9.97-3.21c.34.05.68.1 1.02.16m-1.02-.16L18.16 19.67A2.25 2.25 0 0 1 15.91 22H8.08a2.25 2.25 0 0 1-2.24-2.07L4.77 5.79m14.46 0a48.11 48.11 0 0 0-3.48-.4m-12 .56c.34-.06.68-.11 1.02-.16m0 0a48.11 48.11 0 0 1 3.48-.4m7.5 0v-.92c0-1.18-.91-2.16-2.09-2.2a51.96 51.96 0 0 0-3.32 0c-1.18.04-2.09 1.02-2.09 2.2v.92m7.5 0a48.67 48.67 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}
