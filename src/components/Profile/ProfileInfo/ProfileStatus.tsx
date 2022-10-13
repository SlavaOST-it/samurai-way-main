import React, {ChangeEvent, useState} from 'react';

export type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(props.status)

    const changeMode = () => {
        if (localStatus.trim() !== null) {
            props.updateStatus(localStatus.trim())
        }
        setEditMode(!editMode)
    }

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ? (<div>
                    <span onDoubleClick={changeMode}>{props.status || "no status"}</span>
                </div>)
                : (<div>
                    <input autoFocus={true} onBlur={changeMode} value={localStatus} onChange={changeStatus}/>
                </div>)
            }
        </div>
    );
};
