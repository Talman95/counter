import React, {FC} from 'react';
import Button from '@material-ui/core/Button';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {CounterActionTypes, CounterStateType, incrementCount, resetCount, setError} from "./redux/counterReducer";
import {Dispatch} from "redux";

export const Display: FC = () => {

    const {
        currentValue,
        maxValue,
        isEditMode,
        isComparisonError,
        isError,
    } = useSelector<AppStateType, CounterStateType>(state => state.counter)

    const dispatch = useDispatch<Dispatch<CounterActionTypes>>()

    const onIncrementCount = () => {
        dispatch(incrementCount())
        if (currentValue + 1 === maxValue) {
            dispatch(setError(true))
        }
    }
    const onResetCount = () => {
        dispatch(resetCount())
        isError && dispatch(setError(false))
    }


    return (
        <div className={"container"}>
            {isEditMode
                ?
                <div className={"viewingBoard"}>
                    {isComparisonError
                        ?
                        <div className={"info"}>
                            <p className={"error"}>INCORRECT VALUE</p>
                        </div>

                        :
                        <div className={"info"}>
                            <p>ENTER VALUES</p>
                            <p>THEN PRESS 'SET'</p>
                        </div>
                    }
                </div>
                :
                <div className={"viewingBoard"}>
                    {isError
                        ?
                        <p className={"error"}>TRY IT AGAIN!</p>
                        :
                        <p>CLICK ME!</p>
                    }
                    <span className={isError ? "errorValue" : "value"}>
                            {currentValue}
                        </span>
                </div>
            }

            <div className={"buttonsBlock"}>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={onIncrementCount}
                    disabled={isError || isEditMode}
                    endIcon={<PlusOneIcon/>}
                    size={"large"}
                >
                    INC
                </Button>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={onResetCount}
                    disabled={isEditMode}
                    size={"large"}
                >
                    RESET
                </Button>
            </div>
        </div>
    );
};