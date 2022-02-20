import React, {useState} from 'react';
import './App.css';
import {ControlUnit} from "./ControlUnit";
import {Display} from "./Display";

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [editMode, setEditMode] = useState(false)
    const [valueError, setValueError] = useState(false)

    const [value, setValue] = useState(startValue)
    const [error, setError] = useState(false)

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
            setValueError(true)
        } else setValueError(false)
    }
    const onSetMaxValue = (newValue: number) => {
        setMaxValue(newValue)
        if (newValue <= startValue) {
            setValueError(true)
        } else setValueError(false)
    }
    const onSetValue = () => {
        resetCount()
        setEditMode(false)
    }
    const onEditMode = () => {
        setEditMode(true)
    }

    // Local Storage
    const setToLocalStorage = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const getFromLocalStorage = () => {
        const startValueAsString = localStorage.getItem('startValue')
        const maxValueAsString = localStorage.getItem('maxValue')

        if (startValueAsString) {
            let startValue = JSON.parse(startValueAsString)
            setStartValue(startValue)
        }
        if (maxValueAsString) {
            let maxValue = JSON.parse(maxValueAsString)
            setMaxValue(maxValue)
        }
    }

    return (
        <div className={'App'}>

            <ControlUnit
                startValue={startValue}
                maxValue={maxValue}
                valueError={valueError}
                setStartValue={onSetStartValue}
                setMaxValue={onSetMaxValue}
                onEditMode={onEditMode}
                setValue={onSetValue}
                setToLocalStorage={setToLocalStorage}
                getFromLocalStorage={getFromLocalStorage}
            />

            <Display
                value={value}
                editMode={editMode}
                valueError={valueError}
                error={error}
                incrementCount={incrementCount}
                resetCount={resetCount}
            />
        </div>
    );
}

export default App;
