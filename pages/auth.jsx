import { createStyles, MantineProvider } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { AppHeader, MainTitle /*, ProgressBar, GoalsTitle*/ } from '../components';
import { AuthForm } from '../components';

const useStyles = createStyles(() => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Auth() {
  const { classes } = useStyles();
  return (
    <MantineProvider
      inherit
      theme={{
        defaultGradient: { from: 'red', to: 'orange', deg: 45 },
        primaryColor: 'orange',
      }}
    >
      <AppHeader />
      <div className={classes.wrapper}>
      <AuthForm />
    </div>
    </MantineProvider>
  );
}
