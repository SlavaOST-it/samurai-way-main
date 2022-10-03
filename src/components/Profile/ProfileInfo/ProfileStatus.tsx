import React, {useState} from 'react';

export type ProfileStatusType = {
    status: string
}

export const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    const changeMode = () =>{
        setEditMode(!editMode)
    }

    return (
        <div>
            {!editMode
                ? (<div>
                    <span onClick={changeMode}>{props.status}</span>
                </div>)
                : (<div>
                    <input autoFocus={true} onBlur={changeMode} value={props.status}/>
                </div>)
            }
        </div>
    );
};

