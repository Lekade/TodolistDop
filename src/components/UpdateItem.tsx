import React, {useState} from 'react';
import {Input} from "./Input";
import styles from './../Styles.module.css';

type UpdateRouteProps = {
    oldTitle: string;
    nameCallBack?: string
    callBack: (newTitle: string, nameCallBack?:string) => void;
};

export const UpdateItem = ({ oldTitle, callBack, nameCallBack }: UpdateRouteProps) => {
    const [edit, setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(oldTitle);
    const editHandler = () => {
        callBack(newTitle, nameCallBack)
        setEdit(false);
          };

       return (
        edit
            ? <Input title={newTitle} setNewTitle={setNewTitle} editHandler={editHandler}/>
            : <span className={styles.hoverEffect} onDoubleClick={() => setEdit(true)}>{oldTitle}</span>
    );
};


