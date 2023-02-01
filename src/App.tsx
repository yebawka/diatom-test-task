import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SearchInput from './components/SearchInput';
import Table from './components/Table';
import GlobalStyles from './styles/globalStyle';
import { defaultTheme } from './styles/theme';
import mockData from './utils/mock.json';

const App = () => {
    const [data] = useState(
        mockData.map((item, index) => ({ id: index, ...item })),
    );
    const [filter, setFilter] = useState('');
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <SearchInput
                value={filter}
                onChange={onInputChange}
                placeholder="Search"
                style={{ marginBottom: '20px' }}
            />
            <div
                style={{
                    height: 'calc(100vh - 100px)',
                    overflowY: 'scroll',
                }}
            >
                <Table
                    config={{
                        striped: true,
                        header: {
                            height: '60px',
                            sticky: true,
                        },
                        row: {
                            height: '58px',
                        },
                    }}
                    headers={{
                        avatar: {
                            value: 'Avatar',
                        },
                        first_name: {
                            value: 'First Name',
                            renderer: (h) => (
                                <>
                                    {h} <button>Sort</button>
                                </>
                            ),
                        },
                        last_name: { value: 'Last Name' },
                        email: { value: 'Email Address' },
                        ethereum_address: { value: 'Ethereum Address' },
                        ip_address: { value: 'IP Address' },
                    }}
                    items={data}
                    customRenderers={{
                        avatar: ({ first_name, last_name, avatar }) => (
                            <img
                                alt={`${first_name} ${last_name}`}
                                src={avatar}
                            />
                        ),
                    }}
                    filter={{
                        value: filter,
                        headers: ['first_name', 'last_name'],
                    }}
                    highlight={{
                        first_name: 'b',
                        last_name: 'e',
                    }}
                />
            </div>
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
