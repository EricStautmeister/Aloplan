import { Button, createStyles, Progress } from '@mantine/core';
import { IconArrowBadgeLeft, IconArrowBadgeRight } from '@tabler/icons';
import { useEffect, useState } from 'react';
// import { getFirestore, getDoc, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { GoalInput } from '../GoalInput/GoalInput';
import { GoalInputElement } from '../GoalInput/GoalInputElement';
import { GoalsTitle } from '../Titles/GoalsTitle';
// import { db } from '../../firebase';
// eslint-disable-next-line import/order
// import { useSelector } from 'react-redux';

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

export const handleProgressData = () => {
  const progressValues: any = [
    { value: 22, color: '#1a1515', label: 'Lifetime', tooltip: 'Lifetime Goals' },
    { value: 20, color: '#41312f', label: 'Decade', tooltip: 'Goals for the Decade' },
    { value: 13, color: '#63473b', label: 'Year', tooltip: 'Yearly Goals' },
    { value: 18, color: '#806c5f', label: 'Month', tooltip: 'Monthly Goals' },
    { value: 15, color: '#9c8272', label: 'Week', tooltip: 'Weekly Goals' },
    { value: 12, color: '#b9a49d', label: 'Day', tooltip: 'Goals for every day' },
  ];
  return progressValues;
};

interface labels {
  (): 'Lifetime' | 'Decade' | 'Year' | 'Month' | 'Week' | 'Day';
}

export function Navigation() {
  const { classes } = useStyles();

  const progressValues = handleProgressData();
  const [progress, setProgress] = useState<any>([progressValues[0]]);
  const getTimeframe: labels = () => progress[progress.length - 1].label;

  const [allGoals, setAllGoals] = useState<any>({ [getTimeframe()]: {} });
  const [goals, setGoals] = useState<any>({ [getTimeframe()]: {} });
  const [inputList, setInputList] = useState<any>([]);
  // const user: any = useSelector((state: any) => state.user);

  const updateGoals = (id: any, goal: string) => {
    //FIXME: DOES WORK, but goals may not be needed

    // eslint-disable-next-line no-param-reassign
    const temp = goals;
    temp[id] = goal;
    setGoals(temp);
    // eslint-disable-next-line no-param-reassign
    allGoals[getTimeframe()] = goals;
    setAllGoals(allGoals);
    localStorage.setItem('goals', JSON.stringify(allGoals));
  };

  const returnGoalInputElement = (goal: any) => (
    <GoalInputElement
      key={`${progress[progress.length - 1].label}: ${inputList.length}`}
      id={inputList.length}
      value={goal}
      updateGoals={updateGoals}
    />
  );

  const addInput = () => {
    setInputList(inputList.concat(returnGoalInputElement('')));
  };

  const buildInputList = (currTimeframe: string) => {
    setInputList([]);
    if (!allGoals[currTimeframe]) {
      setGoals({});
      setAllGoals({ ...allGoals, [currTimeframe]: {} });
      setInputList([]);
      return;
    }
    setInputList(
      Object.values(allGoals[currTimeframe]).map((goal: any) => returnGoalInputElement(goal))
    );
  };

  const updateProgress = async (mode: number) => {
    if (mode === 0 && progress.length <= progressValues.length && progress.length > 1) {
      progress.pop();
      setProgress([...progress]);
      return;
    }
    if (mode === 1 && progress.length >= 1 && progress.length < progressValues.length) {
      setProgress([...progress, progressValues[progress.length]]);
    }
    setGoals({});
    setInputList([]);
  };

  useEffect(() => {
    const asyncWrapper = async () => {
      const temp = JSON.parse(localStorage.getItem('goals') || '{}');
      await setAllGoals(temp);
      if (temp[getTimeframe()]) {
        await setGoals(temp[getTimeframe()]);

        setInputList(
          Object.values(temp[getTimeframe()]).map((goal: any) => returnGoalInputElement(goal))
        );
      }
      console.log('Page loaded', localStorage, temp, inputList);
    };
    asyncWrapper();
  }, []);

  useEffect(() => {
    if (allGoals[getTimeframe()] === undefined) allGoals[getTimeframe()] = {};
    setAllGoals(allGoals);
    setGoals(allGoals[getTimeframe()]);
    buildInputList(getTimeframe());
  }, [progress]);

  return (
    <>
      <GoalsTitle currentGoalTimeframe={getTimeframe()} />
      <Progress radius="xl" size={24} sections={progress} />
      <div className={classes.wrapper}>
        <Button className={classes.button} variant="gradient" onClick={() => updateProgress(0)}>
          <IconArrowBadgeLeft size={22} color="#FFF" />
          <p>Back</p>
        </Button>
        <Button className={classes.button} variant="gradient" onClick={() => updateProgress(1)}>
          <p>Save & Next</p>
          <IconArrowBadgeRight size={22} color="#FFF" />
        </Button>
      </div>
      <GoalInput inputList={inputList} addInput={addInput} />
    </>
  );
}
