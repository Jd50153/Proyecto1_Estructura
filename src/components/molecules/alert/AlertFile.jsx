import React from 'react'

export const AlertFile = () => {
    return (
        <div class="mt-2 bg-red-500 text-sm text-white rounded-lg p-4" role="alert" tabindex="-1" aria-labelledby="hs-solid-color-danger-label">
            <span id="hs-solid-color-danger-label" class="font-bold">¡Ups¡</span> El archivo o estructura no es válida.
        </div>
    )
}
