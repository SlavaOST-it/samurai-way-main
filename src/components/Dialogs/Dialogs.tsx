import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    name:string
    id: number
}


const DialogItem = (props:DialogItemType) => {
    return (
        <li className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    )
}


type MessageType ={
    message: string
}

const Message = (props:MessageType) => {
  return(
      <div className={s.message}>{props.message}</div>
  )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                <DialogItem name={'Slava'} id={1}/>
                <DialogItem name={'Natasha'} id={2}/>
                <DialogItem name={'Oleg'} id={3}/>
                <DialogItem name={'Luba'} id={4}/>
                <DialogItem name={'Alex'} id={5}/>
            </ul>

            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'What is a problem?'}/>
                <Message message={'oh, no men'}/>
            </div>
        </div>
    )
}

export default Dialogs