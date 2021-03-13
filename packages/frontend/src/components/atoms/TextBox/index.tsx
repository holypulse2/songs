import React from 'react';
import { StyledInputContainer, StyledInput } from './Styled';

const TextBox = ({ placeholder, value, onChange }: { placeholder: string, value: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void}) => {
	return (
        <StyledInputContainer>
            <StyledInput placeholder={placeholder} onChange={onChange} value={value} />
        </StyledInputContainer>
	);
}

export default TextBox;
