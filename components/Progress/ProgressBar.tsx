export const buffer = () => null;
// import { Progress } from '@mantine/core';
// import { useEffect, useState } from 'react';
// import { GoalInputElement } from '../GoalInput/GoalInputElement';

// export function ProgressBar({
//   allGoals,
//   setAllGoals,
//   currentGoalTimeframe,
//   setGoalTimeframe,
// }: {
//   allGoals: any;
//   setAllGoals: any;
//   currentGoalTimeframe: string;
//   setGoalTimeframe: (mode: string) => void;
// }): JSX.Element {
//   const progressValues = handleProgressData();
//   const [progress, setProgress] = useState<any | any>(progressValues[0]);
//   const [goals, setGoals] = useState<any | any>(allGoals[currentGoalTimeframe] || {});
//   const [inputList, setInputList] = useState<any | any>([]);
//   const updateGoals = (id: any, goal: string) => {
//     // eslint-disable-next-line no-param-reassign
//     const temp = goals;
//     temp[id] = goal;
//     setGoals(temp);
//     // eslint-disable-next-line no-param-reassign
//     if (allGoals[currentGoalTimeframe] === undefined) allGoals[currentGoalTimeframe] = {};
//     // eslint-disable-next-line no-param-reassign
//     allGoals[currentGoalTimeframe] = goals;
//     setAllGoals(allGoals);
//     console.log(goals, allGoals);
//   };
//   const returnGoalInputElement = (goal: any) => (
//     <GoalInputElement
//       key={inputList.length}
//       id={inputList.length}
//       value={goal}
//       updateGoals={updateGoals}
//     />
//   );

//   const buildInputList = (currTimeframe: string) => {
//     if (allGoals[currTimeframe] === undefined) {
//       setGoals({});
//       setInputList([]);
//       return;
//     }
//     setInputList(
//       Object.values(allGoals[currTimeframe]).map((goal: any) => returnGoalInputElement(goal))
//     );
//   };

//   const updateProgress = (mode: number) => {
//     if (mode === 0 && progress.length <= progressValues.length && progress.length > 1) {
//       progress.pop();
//       setProgress([...progress]);
//       setGoalTimeframe(progress[progress.length - 1].label);
//       buildInputList(currentGoalTimeframe);
//       return;
//     }
//     if (mode === 1 && progress.length >= 1 && progress.length < progressValues.length) {
//       setProgress([...progress, progressValues[progress.length]]);
//       setGoalTimeframe(progress[progress.length - 1].label);
//       buildInputList(currentGoalTimeframe);
//     }
//   };
//   useEffect(() => {
//     setGoalTimeframe(progress[progress.length - 1].label);
//   }, [progress]);
//   return (
//     <>
//       <Progress radius="xl" size={24} sections={progress} />
//     </>
//   );
// }
