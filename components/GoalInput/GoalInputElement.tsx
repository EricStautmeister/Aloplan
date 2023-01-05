import { createStyles } from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  input: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    margin: '0.2rem 0',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    border: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    outline: 'none',
    transition: 'all 100ms ease-out',
  },
}));

interface GoalInputElementProps {
  id: number;
  value: any;
  updateGoals: (id: any, goal: any) => void;
}

export function GoalInputElement({ id, value, updateGoals }: GoalInputElementProps) {
  const { classes } = useStyles();
  const [goal, onGoalChange] = useState(value);
  async function updateGoal({ target }:any) {
    onGoalChange(target.value);
    updateGoals(id, target.value);
  }

  return (
    <input
      className={classes.input}
      type="string"
      value={goal}
      onChange={(event) => updateGoal(event)}
    />
  );
}
