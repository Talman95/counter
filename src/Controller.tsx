import React, {ChangeEvent, FC} from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

type ControllerPropsType = {
    startValue: number
    maxValue: number
    comparisonError: boolean
    setStartValue: (newValue: number) => void
    setMaxValue: (newValue: number) => void
    onEditMode: () => void
    onSetValuesCounter: () => void
}

export const Controller: FC<ControllerPropsType> = (
    {
        startValue, maxValue, comparisonError,
        setStartValue, setMaxValue, onEditMode,
        onSetValuesCounter
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
                        onFocus={onEditModeHandler}
                        error={comparisonError}
                        helperText={comparisonError && "Incorrect number"}
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
                        onFocus={onEditModeHandler}
                        error={comparisonError}
                        helperText={comparisonError && "Incorrect number"}
                    />
                </div>
            </div>
            <div className={"buttonsBlock"}>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={onSetValuesCounter}
                    disabled={comparisonError}
                    size={"large"}
                >
                    SET
                </Button>
            </div>
        </div>
    );
};