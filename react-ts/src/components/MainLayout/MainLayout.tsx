import React, { FC, ReactNode } from 'react';

// Types
import { Card as CardType } from 'types';

// MUI
import { Typography, Grid } from '@mui/material';

// Components
import { Card, Search } from 'components';

// CSS
import './style.css';

interface MainLayoutProps {
  title?: string;
  data?: CardType[];
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ title, data, children }) => {
  return (
    <main className="main">
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Search title={title} />
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="flex-start"
      >
        {data?.map((item) => (
          <Grid key={item.title} item>
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
      {children}
    </main>
  );
};

export default MainLayout;
