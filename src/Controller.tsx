import React, {ChangeEvent, FC} from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {
    CounterActionTypes,
    CounterStateType,
    setComparisonError, setEditMode, setError,
    setMaxValue,
    setStartValue
} from "./redux/counterReducer";
import {Dispatch} from 'redux';

export const Controller: FC = () => {

    const {
        startValue,
        maxValue,
        isComparisonError
    } = useSelector<AppStateType, CounterStateType>(state => state.counter)

    const dispatch = useDispatch<Dispatch<CounterActionTypes>>()

    // Установить начальное и максимальное значение
    const onSetStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value)
        dispatch(setStartValue(newValue))
        if (newValue >= maxValue) {
            dispatch(setComparisonError(true))
        } else {
            dispatch(setComparisonError(false))
        }
    }
    const onSetMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value)
        dispatch(setMaxValue(newValue))
        if (newValue <= startValue) {
            dispatch(setComparisonError(true))
        } else {
            dispatch(setComparisonError(false))
        }
    }

    // Вход и выход для режима редактирования начального и максимального значения
    const onEditMode = () => {
        dispatch(setEditMode(true))
    }
    const offEditMode = () => {
        dispatch(setEditMode(false))
        dispatch(setError(false))
    }

    return (
        <div className={"container"}>
            <div className={"viewingBoard"}>
                <div className={"setValue"}>
                    <span>MAX VALUE:</span>
                    <TextField
                        label={"Max Value"}
                        type={"number"}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant={"outlined"}
                        value={maxValue}
                        onChange={onSetMaxValue}
                        onFocus={onEditMode}
                        error={isComparisonError}
                        helperText={isComparisonError && "Incorrect number"}
                    />
                </div>
                <div className={"setValue"}>
                    <span>START VALUE:</span>
                    <TextField
                        label={"Start value"}
                        type={"number"}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant={"outlined"}
                        value={startValue}
                        onChange={onSetStartValue}
                        onFocus={onEditMode}
                        error={isComparisonError}
                        helperText={isComparisonError && "Incorrect number"}
                    />
                </div>
            </div>
            <div className={"buttonsBlock"}>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={offEditMode}
                    disabled={isComparisonError}
                    size={"large"}
                >
                    SET
                </Button>
            </div>
        </div>
    );
};