const SET_START_VALUE = 'SET_START_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const RESET_COUNT = 'RESET_COUNT'
const SET_ERROR = 'SET_ERROR'
const SET_EDIT_MODE = 'SET_EDIT_MODE'
const SET_COMPARISON_ERROR = 'SET_COMPARISON_ERROR'

const initialState = {
    startValue: 0,
    maxValue: 5,
    currentValue: 0,
    isEditMode: false,
    isComparisonError: false,
    isError: false,
}

export type CounterStateType = typeof initialState

export const counterReducer = (state: CounterStateType = initialState, action: CounterActionTypes): CounterStateType => {
    switch (action.type) {
        case SET_START_VALUE:
            return {...state, startValue: action.newValue, currentValue: action.newValue}
        case SET_MAX_VALUE:
            return {...state, maxValue: action.newValue}
        case INCREMENT_COUNT:
            return {...state, currentValue: state.currentValue + 1}
        case RESET_COUNT:
            return {...state, currentValue: state.startValue}
        case SET_ERROR:
            return {...state, isError: action.error}
        case SET_EDIT_MODE:
            return {...state, isEditMode: action.editMode}
        case SET_COMPARISON_ERROR:
            return {...state, isComparisonError: action.error}
        default:
            return state
    }
}

export type CounterActionTypes =
    ReturnType<typeof setStartValue> | ReturnType<typeof setMaxValue>
    | ReturnType<typeof incrementCount> | ReturnType<typeof resetCount>
    | ReturnType<typeof setError> | ReturnType<typeof setEditMode>
    | ReturnType<typeof setComparisonError>

export const setStartValue = (newValue: number) => ({type: SET_START_VALUE, newValue}) as const
export const setMaxValue = (newValue: number) => ({type: SET_MAX_VALUE, newValue}) as const
export const incrementCount = () => ({type: INCREMENT_COUNT}) as const
export const resetCount = () => ({type: RESET_COUNT}) as const
export const setError = (error: boolean) => ({type: SET_ERROR, error}) as const
export const setEditMode = (editMode: boolean) => ({type: SET_EDIT_MODE, editMode}) as const
export const setComparisonError = (error: boolean) => ({type: SET_COMPARISON_ERROR, error}) as const