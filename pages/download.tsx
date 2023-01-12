import { createStyles, Title } from '@mantine/core';
import View from '../components/pdfview/pdfview';

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
    margin: '0 auto',
    // padding: `0 ${theme.spacing.md}px`,
  },
  PDFviewer: {
    width: '80vw',
    height: '80vh',
  },
}));
export default function Download() {
  const { classes } = useStyles();
  return (
    <div className={classes.sideMarginProvider}>
      <Title className={classes.title} align="center">
        <View />
      </Title>
    </div>
  );
}
