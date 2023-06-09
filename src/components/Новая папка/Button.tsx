import { FC } from 'react';
import './Button.scss';
import { log } from 'console';

interface IButton {
    isDisabled: boolean;
    type: 'primary' | 'secondary' | 'secondary2';
    content: string;
    onClick: () => void;

}

export const Button: FC<IButton> = ({content, isDisabled, onClick, type}) => {

    const buttonClass = `button button--${type} ${isDisabled ? 'disabled' : 'active'}`

    return (
        <button
          className={buttonClass} 
          onClick={onClick} 
          disabled= {isDisabled}
        >
             {content}
        </button>
    );
}