import { createStyles, MantineProvider } from '@mantine/core';
import { AppHeader, Navigation } from '../components';

const useStyles = createStyles((theme) => ({
  sideMarginProvider: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -50,
    maxWidth: 800,
    padding: `0 ${theme.spacing.md}px`,
  },
}));
export default function Goals() {
  const { classes } = useStyles();
  return (
    <MantineProvider
      inherit
      theme={{
        defaultGradient: { from: 'red', to: 'orange', deg: 45 },
        primaryColor: 'orange',
      }}
    >
      <AppHeader />
      <div className={classes.sideMarginProvider}>
        <Navigation />
      </div>
    </MantineProvider>
  );
}
