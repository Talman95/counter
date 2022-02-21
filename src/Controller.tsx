import React, {ChangeEvent, FC} from 'react';

type ControllerPropsType = {
    startValue: number
    maxValue: number
    comparisonError: boolean
    setStartValue: (newValue: number) => void
    setMaxValue: (newValue: number) => void
    onEditMode: () => void
    setValue: () => void
    setToLocalStorage: () => void
}

export const Controller: FC<ControllerPropsType> = (
    {
        startValue, maxValue, comparisonError,
        setStartValue, setMaxValue, onEditMode,
        setValue, setToLocalStorage
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
    const onSetValuesCounter = () => {
        setToLocalStorage()
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
                    disabled={comparisonError}
                    onClick={onSetValuesCounter}
                >
                    SET
                </button>
            </div>
        </div>
    );
};