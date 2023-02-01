import { ReactNode, useMemo } from 'react';
import { isPrimitive, objectKeys } from '../../../utils/helpers';
import { MinTableItem } from '../types';
import { StyledTd } from './styled';
import { RowType } from './types';

const Row = <T extends MinTableItem>({
    item,
    customRenderers,
    headers,
    highlight = {},
}: RowType<T>) => {
    const isHighlightedRow = useMemo(() => {
        let isHighlightedTmp = true;

        objectKeys(headers).forEach((itemProperty) => {
            const highlightValue = highlight[itemProperty];

            if (highlightValue) {
                isHighlightedTmp =
                    isHighlightedTmp &&
                    (item[itemProperty] as string)
                        .toLowerCase()
                        .includes(highlightValue.toLowerCase());
            }
        });

        return isHighlightedTmp;
    }, [headers, highlight, item]);

    return (
        <tr>
            {objectKeys(headers).map((itemProperty) => {
                const customRenderer = customRenderers?.[itemProperty];

                if (customRenderer) {
                    return (
                        <td key={item[itemProperty] as string}>
                            {customRenderer(item)}
                        </td>
                    );
                }

                return (
                    <StyledTd
                        isHighlighted={
                            isHighlightedRow &&
                            highlight.hasOwnProperty(itemProperty)
                        }
                        key={item[itemProperty] as string}
                    >
                        {isPrimitive(item[itemProperty])
                            ? (item[itemProperty] as ReactNode)
                            : ''}
                    </StyledTd>
                );
            })}
        </tr>
    );
};

export default Row;
