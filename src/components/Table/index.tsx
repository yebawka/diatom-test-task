import { useDeferredValue, useMemo } from 'react';
import { isPrimitive } from '../../utils/helpers';
import Row from './Row';
import { StyledTable } from './styled';
import { MinTableItem, TableProps } from './types';

const Table = <T extends MinTableItem>({
    items,
    headers,
    customRenderers,
    filter,
    highlight,
    config,
}: TableProps<T>) => {
    const defferedFilter = useDeferredValue(filter);

    const filteredItems = useMemo(
        () =>
            items.filter((item) =>
                filter?.headers.some((header) => {
                    const valueByHeader = item[header];

                    if (isPrimitive(valueByHeader)) {
                        return (valueByHeader as string)
                            .toLowerCase()
                            .includes(filter.value.toLowerCase());
                    }

                    return false;
                }),
            ),
        [defferedFilter, items],
    );

    return (
        <StyledTable {...config}>
            <thead>
                <tr>
                    {Object.values(headers).map(({ value, renderer }) => (
                        <th key={value}>
                            {renderer ? renderer(value) : value}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredItems.map((item) => (
                    <Row
                        key={item.id as string}
                        customRenderers={customRenderers}
                        headers={headers}
                        item={item}
                        highlight={highlight}
                    />
                ))}
            </tbody>
        </StyledTable>
    );
};

export default Table;
