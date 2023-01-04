import { Progress, useMantineTheme, MantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { GoalInput } from '../GoalInput/GoalInput';

export function ProgressBar({
  allGoals,
  setAllGoals,
  currentGoalTimeframe,
  setGoalTimeframe,
}: {
  allGoals: any;
  setAllGoals: any;
  currentGoalTimeframe: string;
  setGoalTimeframe: (mode: string) => void;
}): JSX.Element {
  const getColor = (theme: MantineTheme, item: Number) => {
    if (item === 0) return '#1a1515';
    if (item === 1) return '#41312f';
    if (item === 2) return '#63473b';
    if (item === 3) return '#806c5f';
    if (item === 4) return '#9c8272';
    if (item === 5) return '#b9a49d';
    return 'red';
  };
  const theme = useMantineTheme();
  const [progress, setProgress]: [any, any] = useState([
    { value: 22, color: getColor(theme, 0), label: 'Lifetime', tooltip: 'Lifetime Goals' },
  ]);
  const progressValues: any = [
    { value: 22, color: getColor(theme, 0), label: 'Lifetime', tooltip: 'Lifetime Goals' },
    { value: 20, color: getColor(theme, 1), label: 'Decade', tooltip: 'Goals for the Decade' },
    { value: 13, color: getColor(theme, 2), label: 'Year', tooltip: 'Yearly Goals' },
    { value: 15, color: getColor(theme, 3), label: 'Month', tooltip: 'Monthly Goals' },
    { value: 15, color: getColor(theme, 4), label: 'Week', tooltip: 'Weekly Goals' },
    { value: 15, color: getColor(theme, 5), label: 'Day', tooltip: 'Goals for every day' },
  ];
  const updateProgress = (mode: number) => {
    if (mode === 0 && progress.length <= progressValues.length && progress.length > 1) {
      progress.pop();
      setProgress([...progress]);
      setGoalTimeframe(progress[progress.length - 1].label);
      return;
    }
    if (mode === 1 && progress.length >= 1 && progress.length < progressValues.length) {
      setProgress([...progress, progressValues[progress.length]]);
      setGoalTimeframe(progress[progress.length - 1].label);
    }
  };
  useEffect(() => {
    setGoalTimeframe(progress[progress.length - 1].label);
  }, [progress]);
  return (
    <>
      <Progress radius="xl" size={24} sections={progress} />
      <NavBar updateFunction={updateProgress} />
      <GoalInput
        currentGoalTimeframe={currentGoalTimeframe}
        allGoals={allGoals}
        setAllGoals={setAllGoals}
      />
    </>
  );
}
