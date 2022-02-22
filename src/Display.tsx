import React, {FC} from 'react';
import Button from '@material-ui/core/Button';
import PlusOneIcon from '@material-ui/icons/PlusOne';

type DisplayPropsType = {
    value: number
    editMode: boolean
    comparisonError: boolean
    error: boolean
    incrementCount: () => void
    resetCount: () => void
}

export const Display: FC<DisplayPropsType> = (
    {
        value, editMode,
        comparisonError, error,
        incrementCount, resetCount
    }
) => {
    return (
        <div className={"container"}>
            {editMode
                ?
                <div className={"viewingBoard"}>
                    {comparisonError
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
                    {error
                        ?
                        <p className={"error"}>TRY IT AGAIN!</p>
                        :
                        <p>CLICK ME!</p>
                    }
                    <span className={error ? "errorValue" : "value"}>
                            {value}
                        </span>
                </div>
            }

            <div className={"buttonsBlock"}>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={incrementCount}
                    disabled={error || editMode}
                    endIcon={<PlusOneIcon/>}
                    size={"large"}
                >
                    INC
                </Button>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={resetCount}
                    disabled={editMode}
                    size={"large"}
                >
                    RESET
                </Button>
            </div>
        </div>
    );
};