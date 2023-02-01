import {
    CustomRenderers,
    MinTableItem,
    TableHeaders,
    TableHighlight,
} from '../types';

export type RowType<T extends MinTableItem> = {
    item: T;
    customRenderers?: CustomRenderers<T>;
    headers: TableHeaders<T>;
    highlight?: TableHighlight<T>;
};

export type StyledIdProps = {
    isHighlighted?: boolean;
};
