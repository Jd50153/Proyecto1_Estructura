import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    validateIndications: true,
    validateSaveProgress: true,
    validateUndoRedo: false,
    responses: {},
    levels: {
        level1: false,
        level2: false,
        level3: false,
        level4: false,
        level5: false,
        level6: false,
    },
    completedLevels: {
        complete1: false,
        complete2: false,
        complete3: false,
        complete4: false,
        complete5: false,
        complete6: false,
        complete7: false
    },
    undoStack: [],  // Pila para deshacer
    redoStack: []   // Pila para rehacer
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setValidateIndications: (state, action) => {
            state.validateIndications = action.payload
        },
        setValidateSaveProgress: (state, action) => {
            state.validateSaveProgress = action.payload
        },
        setValidateUndoRedo: (state, action) => {
            state.validateUndoRedo = action.payload
        },
        addResponse: (state, action) => {
            // Guardar el estado anterior en la pila de deshacer antes de hacer un cambio
            state.undoStack.push(JSON.stringify({
                responses: state.responses,
                levels: state.levels,
                completedLevels: state.completedLevels
            }));

            const { id, response } = action.payload;
            state.responses[id] = response;

            // Limpiar la pila de rehacer ya que no se puede rehacer después de una nueva acción
            state.redoStack = [];
        },
        unlockLevel: (state, action) => {
            // Guardar el estado anterior en la pila de deshacer antes de hacer un cambio
            state.undoStack.push(JSON.stringify({
                responses: state.responses,
                levels: state.levels,
                completedLevels: state.completedLevels
            }));

            const levelKey = action.payload;
            state.levels[levelKey] = true;

            switch (levelKey) {
                case "level1":
                    state.completedLevels.complete1 = true;
                    state.completedLevels.complete2 = true;
                    break;
                case "level2":
                    state.completedLevels.complete3 = true;
                    break;
                case "level3":
                    state.completedLevels.complete4 = true;
                    break;
                case "level4":
                    state.completedLevels.complete5 = true;
                    break;
                case "level5":
                    state.completedLevels.complete6 = true;
                    break;
                case "level6":
                    state.completedLevels.complete7 = true;
                    break;
                default:
                    console.error("Nivel no reconocido:", levelKey);
            }

            // Limpiar la pila de rehacer ya que no se puede rehacer después de una nueva acción
            state.redoStack = [];
        },
        undo: (state) => {
            if (state.undoStack.length > 0) {
                // Guardar el estado actual en la pila de rehacer antes de deshacer
                state.redoStack.push(JSON.stringify({
                    responses: state.responses,
                    levels: state.levels,
                    completedLevels: state.completedLevels
                }));

                // Recuperar el último estado de la pila de deshacer
                const previousState = JSON.parse(state.undoStack.pop());

                // Restaurar el estado anterior
                state.responses = previousState.responses;
                state.levels = previousState.levels;
                state.completedLevels = previousState.completedLevels;
            } else {
                console.warn("No hay más acciones para deshacer");
            }
        },
        redo: (state) => {
            if (state.redoStack.length > 0) {
                // Guardar el estado actual en la pila de deshacer antes de rehacer
                state.undoStack.push(JSON.stringify({
                    responses: state.responses,
                    levels: state.levels,
                    completedLevels: state.completedLevels
                }));

                // Recuperar el estado que habíamos deshecho
                const nextState = JSON.parse(state.redoStack.pop());

                // Restaurar el estado siguiente
                state.responses = nextState.responses;
                state.levels = nextState.levels;
                state.completedLevels = nextState.completedLevels;
            } else {
                console.warn("No hay más acciones para rehacer");
            }
        },
        resetGame: (state) => {
            return initialState;
        },
        setGameProgress: (state, action) => {
            const { levels, completedLevels } = action.payload;
            state.levels = levels;
            state.completedLevels = completedLevels;
        },
    },
});

export const {
    setValidateIndications,
    setValidateSaveProgress,
    addResponse,
    unlockLevel,
    undo,
    redo,
    resetGame,
    setValidateUndoRedo,
    setGameProgress
} = gameSlice.actions;
export default gameSlice.reducer;
