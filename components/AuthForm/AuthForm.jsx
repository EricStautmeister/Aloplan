import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  createStyles,
} from '@mantine/core';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { AuthContext } from '../Context/AuthContext';

const useStyles = createStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 400,
    padding: theme.spacing.md,
  },
}));

export function AuthForm() {
  const auth = getAuth();
  //   const user = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loginMode, setLoginMode] = useState(1);
  const { classes } = useStyles();

  const createAccount = async () => {
    try {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then(async (userCredential) => {
        // Signed in
        const credentialUser = userCredential?.user;
        setUser(credentialUser);
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  const signIn = async () => {
    try {
      console.log('email', emailRef.current?.value);
      signInWithEmailAndPassword(auth, emailRef.current?.value, passwordRef.current?.value).then(
        async (userCredential) => {
          // Signed in
          const credentialUser = userCredential.user;
          setUser(credentialUser);
        }
      );
      console.log('user', user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  const changeLoginMode = (e) => {
    e.preventDefault();
    setLoginMode((prev) => (prev === 1 ? 0 : 1));
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  //TODO: Add remember me functionality
  return (
    <Container size={420} my={40} className={classes.form}>
      <Title variant="gradient" align="center">
        {loginMode ? 'Sign In' : 'Sign Up'}
      </Title>
      {loginMode ? (
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{' '}
          <Link href="#">
            <Anchor size="sm" onClick={(event) => changeLoginMode(event)}>
              Create account
            </Anchor>
          </Link>
        </Text>
      ) : (
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Have an account already?{' '}
          <Link href="#">
            <Anchor size="sm" onClick={(event) => changeLoginMode(event)}>
              Login
            </Anchor>
          </Link>
        </Text>
      )}

      {loginMode ? (
        <>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" ref={emailRef} placeholder="you@random.dev" required />
            <PasswordInput
              label="Password"
              ref={passwordRef}
              placeholder="Your password"
              required
              mt="md"
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
              <Anchor onClick={(event) => event.preventDefault()} href="#" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" onClick={() => signIn()}>
              Sign in
            </Button>
          </Paper>
        </>
      ) : (
        <>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" ref={emailRef} placeholder="you@random.dev" required />
            <PasswordInput
              label="Password"
              ref={passwordRef}
              placeholder="Your password"
              required
              mt="md"
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
            </Group>
            <Button fullWidth mt="xl" onClick={() => createAccount()}>
              Sign up
            </Button>
          </Paper>
        </>

      )}
    </Container>
  );
}
