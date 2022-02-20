import React, {FC} from 'react';

type DisplayPropsType = {
    value: number
    editMode: boolean
    valueError: boolean
    error: boolean
    incrementCount: () => void
    resetCount: () => void
}

export const Display: FC<DisplayPropsType> = (
    {
        value, editMode,
        valueError, error,
        incrementCount, resetCount
    }
) => {
    return (
        <div className={'container'}>
            {editMode
                ?
                <div className={"viewingBoard"}>
                    {valueError
                        ?
                        <div className={"info"}>
                            <p>INCORRECT VALUE</p>
                        </div>

                        :
                        <div className={"info"}>
                            <p>ENTER VALUES</p>
                            <p>THEN PRESS 'SET'</p>
                        </div>
                    }
                </div>
                :
                <div className={'viewingBoard'}>
                    {error
                        ?
                        <p>TRY IT AGAIN!</p>
                        :
                        <p>CLICK ME!</p>
                    }
                    <span className={'value'}>
                            {value}
                        </span>
                </div>
            }

            <div className={'buttonsBlock'}>
                <button
                    onClick={incrementCount}
                    disabled={error || editMode}
                >
                    INC
                </button>
                <button
                    onClick={resetCount}
                    disabled={editMode}
                >
                    RESET
                </button>
            </div>
        </div>
    );
};