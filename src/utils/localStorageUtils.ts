import {AppStateType} from "../redux/store";


export const loadState = () => {
    const preloadedStateAsString = localStorage.getItem('app-state')
    if (preloadedStateAsString) {
        return JSON.parse(preloadedStateAsString)
    }
    return undefined
}

export const saveState = (state: AppStateType) => {
    localStorage.setItem('app-state', JSON.stringify(state))
}