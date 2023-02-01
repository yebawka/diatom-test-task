/** Helpers */

import { TableHeaders } from '../components/Table/types';
import { PrimitiveType } from './types';

export const objectValues = <T extends {}>(obj: T) => {
    return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
};

export const objectKeys = <T extends {}>(headers: TableHeaders<T>) => {
    return Object.keys(headers).map((objKey) => objKey as keyof T);
};

export const isPrimitive = (value: any): value is PrimitiveType => {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'symbol'
    );
};
