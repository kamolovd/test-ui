import React, {FC} from 'react';

export interface MyButtonInterface {
    color: string;
    children: React.ReactNode
}

export const MyButton: FC<MyButtonInterface> = ({children, color, ...props}) => {
    return (
        <button style={{color}} {...props}>
            {children}
        </button>
    )
}
