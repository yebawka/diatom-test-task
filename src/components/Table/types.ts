import { PrimitiveType } from '../../utils/types';

export interface MinTableItem {
    id?: PrimitiveType;
}

export type TableHighlight<T> = Partial<Record<keyof T, string>>;

type TableHeader = {
    value: string;
    renderer?: (header: string) => React.ReactNode;
};

export type TableHeaders<T extends MinTableItem> = Partial<
    Record<keyof T, TableHeader>
>;

export type CustomRenderers<T extends MinTableItem> = Partial<
    Record<keyof T, (it: T) => React.ReactNode>
>;

export type TableFilter<T> = {
    value: string;
    headers: Array<keyof T>;
};

export type TableConfig = {
    header?: {
        height?: string;
        sticky?: boolean;
    };
    row?: {
        height: string;
    };
    striped?: boolean;
};

export type TableProps<T extends MinTableItem> = {
    items: T[];
    headers: TableHeaders<T>;
    customRenderers?: CustomRenderers<T>;
    filter?: TableFilter<T>;
    config?: TableConfig;
    highlight?: TableHighlight<T>;
};
