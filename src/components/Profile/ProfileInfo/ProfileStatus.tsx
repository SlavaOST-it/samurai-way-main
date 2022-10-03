import React, {ChangeEvent, useState} from 'react';

export type ProfileStatusType = {
    status: any,
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(props.status)

    const changeMode = () => {
        setEditMode(!editMode)
        props.updateStatus(localStatus)

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

