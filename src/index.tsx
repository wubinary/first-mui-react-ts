import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Router, Route, Link, hashHistory } from 'react-router'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import Blog from './Blog';
import theme from './theme';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <ThemeProvider theme={theme}>
        <Blog />
    </ThemeProvider>,
);
