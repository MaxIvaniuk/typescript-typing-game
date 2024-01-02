import React, { FC } from 'react';

const ErrorCounter: FC<{errors: number}> = ({ errors }) => {
    return (
        <>
            { errors > 0 &&
                <div className="quote-letters-count">
                    Error{errors === 1 ? '' : 's'}:
                    <span className="badge">You made {errors} errors</span>
                </div>
            }
        </>
    )
}
export default ErrorCounter

