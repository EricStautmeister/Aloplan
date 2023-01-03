import { useState } from 'react';
import { Button, createStyles } from '@mantine/core';
import { GoalInputElement } from './GoalInputElement';

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
  allGoals: any;
  setAllGoals: any;
  currentGoalTimeframe: string;
}

export function GoalInput({ allGoals, setAllGoals, currentGoalTimeframe }: Props) {
  const { classes } = useStyles();
  const [goals, setGoals] = useState<any | any>(allGoals[currentGoalTimeframe] || []);
  const updateGoals = (id: any, goalObject: any[], goal: string) => {
    goals[id] = goal;
    setGoals(goals);
  };
  const addRow = async () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < goals.length + 1; i++) {
      setGoals([...goals, '']);
    }
    // eslint-disable-next-line no-param-reassign
    allGoals[currentGoalTimeframe] = goals;
    setAllGoals(allGoals);
  };
  return (
    <div className={classes.wrapper}>
      {goals.map((goal: any, index: number) => (
        <GoalInputElement key={index} id={index} goals={goals} updateGoals={updateGoals} />
      ))}
      <div className={classes.ButtonWrapper}>
        <Button className={classes.button} variant="gradient" onClick={() => addRow()}>
          {goals.length === 0 ? 'Start adding Goals' : 'Add Goal'}
        </Button>
      </div>
    </div>
  );
}
