import React, {useEffect, useState} from 'react';
import './App.css';
import {Controller} from "./Controller";
import {Display} from "./Display";

function App() {
    // state of Controller
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [editMode, setEditMode] = useState(false) // режим установки начального и максимального значений
    const [comparisonError, setComparisonError] = useState(false) // ошибка при сравнении начального и максимального значений

    // state of Display
    const [value, setValue] = useState(startValue)
    const [error, setError] = useState(false) // ошибка при достижении счетчиком максимального значения

    useEffect(() => {
        getStartValueFromLocalStorage()
        getMaxValueFromLocalStorage()
    }, [])

    useEffect(() => {
        setValue(startValue)
    }, [startValue])

    const incrementCount = () => {
        const newValue = value + 1
        if (newValue === maxValue) {
            setError(true)
        }
        setValue(newValue)
    }

    const resetCount = () => {
        setValue(startValue)
        error && setError(false)
    }

    const onSetStartValue = (newValue: number) => {
        setStartValue(newValue)
        if (newValue >= maxValue) {
            (!comparisonError) && setComparisonError(true)
        } else {
            comparisonError && setComparisonError(false)
        }
    }

    const onSetMaxValue = (newValue: number) => {
        setMaxValue(newValue)
        if (newValue <= startValue) {
            (!comparisonError) && setComparisonError(true)
        } else {
            comparisonError && setComparisonError(false)
        }
    }

    const onSetValue = () => {
        resetCount()
        setEditMode(false)
    }

    const onEditMode = () => {
        setEditMode(true)
    }

    const onSetValuesCounter = () => {
        setToLocalStorage()
        onSetValue()
    }

    // Local Storage
    const setToLocalStorage = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const getStartValueFromLocalStorage = () => {
        const startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let startValue = JSON.parse(startValueAsString)
            setStartValue(startValue)
        }
    }
    const getMaxValueFromLocalStorage = () => {
        const maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let maxValue = JSON.parse(maxValueAsString)
            setMaxValue(maxValue)
        }
    }

    return (
        <div className={'App'}>

            <Controller
                startValue={startValue}
                maxValue={maxValue}
                comparisonError={comparisonError}
                setStartValue={onSetStartValue}
                setMaxValue={onSetMaxValue}
                onEditMode={onEditMode}
                onSetValuesCounter={onSetValuesCounter}
            />

            <Display
                value={value}
                editMode={editMode}
                comparisonError={comparisonError}
                error={error}
                incrementCount={incrementCount}
                resetCount={resetCount}
            />

        </div>
    );
}

export default App;
