import React, {ChangeEvent, FC} from 'react';

type ControlUnitPropsType = {
    startValue: number
    maxValue: number
    valueError: boolean
    setStartValue: (newValue: number) => void
    setMaxValue: (newValue: number) => void
    onEditMode: () => void
    setValue: () => void
    setToLocalStorage: () => void
    getFromLocalStorage: () => void
}

export const ControlUnit: FC<ControlUnitPropsType> = (
    {
        startValue, maxValue, valueError,
        setStartValue, setMaxValue, onEditMode,
        setValue, setToLocalStorage, getFromLocalStorage
    }
) => {

    const onSetStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value)
        setStartValue(newValue)
    }
    const onSetMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value)
        setMaxValue(newValue)
    }
    const onEditModeHandler = () => {
        onEditMode()
    }
    const onSetToLocalStorage = () => {
        setToLocalStorage()
        setValue()
    }
    const onGetFromLocalStorage = () => {
        getFromLocalStorage()
        setValue()
    }

    return (
        <div className={'container'}>
            <div className={'viewingBoard'}>
                <div className={'setValue'}>
                    <span>MAX VALUE:</span>
                    <input
                        type={"number"}
                        value={maxValue}
                        onChange={onSetMaxValue}
                        onFocus={onEditModeHandler}
                    />
                </div>
                <div className={'setValue'}>
                    <span>START VALUE:</span>
                    <input
                        type={"number"}
                        value={startValue}
                        onChange={onSetStartValue}
                        onFocus={onEditModeHandler}
                    />
                </div>
            </div>
            <div className={'buttonsBlock'}>
                <button
                    disabled={valueError}
                    onClick={onGetFromLocalStorage}
                >
                    GET
                </button>
                <button
                    disabled={valueError}
                    onClick={onSetToLocalStorage}
                >
                    SET
                </button>
            </div>
        </div>
    );
};