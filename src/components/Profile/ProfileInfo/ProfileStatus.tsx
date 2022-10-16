import React, {ChangeEvent, useState} from 'react';
import s from "./ProfileStatus.module.css"

export type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(props.status)
    const [error, setError] = useState<string | null>(null)

    const changeMode = () => {
        if (localStatus.trim() !== null) {
            if (localStatus.length > 20) {
                setLocalStatus(props.status)
            } else {
                setError(null)
                props.updateStatus(localStatus.trim())
            }
        }
        setEditMode(!editMode)
    }

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
        if (e.currentTarget.value.length > 20) {
            setError('Max length 20 symbols')
        } else {

            setError(null)
        }
    }


    return (
        <div>
            {!editMode
                ? (<div>
                    <span
                        className={s.status}
                        placeholder={"your status"}
                        onDoubleClick={changeMode}>{props.status || "no status"}</span>
                </div>)
                : (<div>
                    <input
                        className={s.inputStatus}
                        autoFocus={true}
                        onBlur={changeMode}
                        value={localStatus}
                        onChange={changeStatus}
                    />
                    {error && (<span className={s.errorSpan}>{error}</span>)}
                </div>)
            }
        </div>
    );
};
