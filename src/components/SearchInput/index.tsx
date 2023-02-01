import React, { InputHTMLAttributes } from 'react';
import { StyledSearchInput, StyledSearchLabel } from './styled';

const SearchInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
    ...rest
}) => {
    return (
        <StyledSearchLabel>
            <StyledSearchInput type="text" {...rest} />
        </StyledSearchLabel>
    );
};

export default SearchInput;
