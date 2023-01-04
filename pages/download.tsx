import { createStyles, MantineProvider, Title } from '@mantine/core';

import { AppHeader /*, ProgressBar, GoalsTitle*/ } from '../components';

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: 'MontserratAlt1',
    fontWeight: 600,
    fontSize: 150,
    letterSpacing: -2,
    [theme.fn.smallerThan('md')]: {
      fontSize: 100,
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: 40,
    },
  },
  sideMarginProvider: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -50,
    maxWidth: 1000,
    padding: `0 ${theme.spacing.md}px`,
  },
}));
export default function Download() {
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
        <Title className={classes.title} align="center">
          Not Yet Implemented
        </Title>
      </div>
    </MantineProvider>
  );
}
