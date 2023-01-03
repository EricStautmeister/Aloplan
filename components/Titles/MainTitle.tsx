import { createStyles, Title, MantineProvider } from '@mantine/core';
// import Image from 'next/image';

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
      fontSize: 60,
    },
  },
  subTitle: {
    fontFamily: 'Sans-Serif',
    fontWeight: 500,
    color: '#892256',
    margin: '-2rem',
    [theme.fn.smallerThan('md')]: {
      fontSize: 30,
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: 15,
      margin: '-1rem',
    },
  },
}));

export function MainTitle() {
  const { classes } = useStyles();
  return (
    <MantineProvider
      inherit
      theme={{ defaultGradient: { from: '#0F47AF', to: '#FF0000', deg: 90 } }}
    >
      <Title className={classes.title} variant="gradient" align="center">
        ALOPLAN
      </Title>
      <Title className={classes.subTitle} align="center">
        WHERE GOALS TAKE FORM
      </Title>
    </MantineProvider>
  );
}
