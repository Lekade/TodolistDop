import React, {ChangeEvent} from 'react';

type InputProps = {
    title: string,
    setNewTitle: (newTitle: string) => void
    editHandler?: () => void
    placeholder?: string
}
export const Input = ({
                          title,
                          setNewTitle,
                          placeholder,
                          editHandler
                      }: InputProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        <input
            value={title}
            onChange={onChangeHandler}
            placeholder={placeholder}
            autoFocus
            onBlur={editHandler}
        />
    );
};

