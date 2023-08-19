import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Router, Routes, Route, Link, BrowserRouter, useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import Blog from './Blog';
import Markdown from './Markdown';
import theme from './theme';

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Blog />
        </ThemeProvider>
    );
}

const Posted = () => {
    const { post_md_file } = useParams();
    const [ postRaw, setPostRaw ] = React.useState("");
    
    React.useEffect(() => {
        async function fetchData() {
            setPostRaw(await fetch("/" + post_md_file).then((res) => (res.text())));
        }
        fetchData();
    }, []);


    return (
        <Markdown className="markdown" key={postRaw.substring(0, 40) + "Posted"}>
            {
                postRaw
            }
        </Markdown>
    );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/post/:post_md_file" element={ <Posted/> } />
    </Routes>
    </BrowserRouter>
);
