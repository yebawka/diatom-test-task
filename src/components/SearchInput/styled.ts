import styled from 'styled-components';

export const StyledSearchInput = styled.input`
    padding: 5px 0 5px 25px;
`;

export const StyledSearchLabel = styled.label`
    position: relative;

    &:before {
        content: '';
        position: absolute;
        left: 5px;
        top: 0;
        bottom: 0;
        width: 20px;
        background: url("data:image/svg+xml;charset=UTF-8,%3csvg fill='%23000000' width='64px' height='64px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='SVGRepo_bgCarrier' stroke-width='0'%3e%3c/g%3e%3cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3e%3c/g%3e%3cg id='SVGRepo_iconCarrier'%3e%3cpath d='M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038Z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e")
            center / contain no-repeat;
    }
`;
