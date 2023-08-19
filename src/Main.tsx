import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title } = props;

  const [ postRaws, setPostRaws ] = React.useState([]);

  React.useEffect(() => {
    const fetchedData = [];
    
    async function fetchData() {
      const fetchedData = [];
      for (const url of posts) {
        const response = await fetch(url);
        const raw      = await response.text();
        fetchedData.push(raw);
      }

      setPostRaws(fetchedData);
    }

    fetchData();
  }, []);

  console.log(postRaws);
  
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {postRaws.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {
            post
          }
        </Markdown>
      ))}
    </Grid>
  );
}
