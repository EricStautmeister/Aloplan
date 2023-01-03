import { Button, createStyles } from '@mantine/core';
import { IconArrowBadgeLeft, IconArrowBadgeRight } from '@tabler/icons';

interface Props {
  updateFunction: (mode: number) => void;
}

const useStyles = createStyles((theme) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.md,
    textDecoration: 'none',
    color: theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: theme.spacing.md,
    justifyContent: 'space-between',
  },
}));

export function NavBar({ updateFunction }: Props) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button className={classes.button} variant="gradient" onClick={() => updateFunction(0)}>
        <IconArrowBadgeLeft size={22} color="#FFF" />
        <p>Back</p>
      </Button>
      <Button className={classes.button} variant="gradient" onClick={() => updateFunction(1)}>
        <p>Next</p>
        <IconArrowBadgeRight size={22} color="#FFF" />
      </Button>
    </div>
  );
}
