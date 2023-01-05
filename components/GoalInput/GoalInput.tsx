import { Button, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },
  ButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: theme.spacing.md,
    justifyContent: 'right',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing.lg,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: theme.spacing.md,
    justifyContent: 'right',
  },
}));

interface Props {
  inputList: any;
  addInput: any;
}

export function GoalInput({
  inputList,
  addInput,
}: Props) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <>{inputList}</>
      <div className={classes.ButtonWrapper}>
        <Button className={classes.button} variant="gradient" onClick={() => addInput()}>
          {inputList.length === 0 ? 'Start adding Goals' : 'Add Goal'}
        </Button>
      </div>
    </div>
  );
}
