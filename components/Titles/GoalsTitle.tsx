import { createStyles, Title, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 70,
    fontWeight: 900,
    letterSpacing: -2,
    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
    marginBottom: theme.spacing.xl * 2,
  },
}));

export function GoalsTitle({ currentGoalTimeframe }: { currentGoalTimeframe: string }) {
  const { classes } = useStyles();
  return (
    <Title className={classes.title} align="center">
      Goals for my {' '}
      <Text inherit variant="gradient" component="span">
        {currentGoalTimeframe}
      </Text>
    </Title>
  );
}