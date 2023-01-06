import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import Image from 'next/image';
import { getAuth } from 'firebase/auth';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 600,
    fontSize: theme.fontSizes.md,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  themeToggle: {
    marginTop: -5,
    [theme.fn.largerThan('sm')]: {
      marginLeft: theme.spacing.md,
    },
  },
  logo: {
    marginTop: '10px',
  },
}));

export function LinkMenu() {
  const { classes } = useStyles();
  return (
    <>
      <Link href="/">
        <a className={classes.link}>Home</a>
      </Link>
      <Link href="/goals">
        <a className={classes.link}>Goals</a>
      </Link>
      <Link href="/download">
        <a className={classes.link}>Download</a>
      </Link>
    </>
  );
}

export function AuthGroup() {
  const auth = getAuth();

  const signOut = async () => {
    await auth.signOut();
    console.log('user logout');
  };

  return (
    <>
      {auth.currentUser ? (
        <Button variant="gradient" onClick={() => signOut()}>
          Sign Out
        </Button>
      ) : (
        <Link href="/auth">
          <Button variant="gradient">Sign In</Button>
        </Link>
      )}
    </>
  );
}

export function AppHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Image src="/LOGOnoSlogan.png" width={150} height={25} alt="" />

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <LinkMenu />
          </Group>
          <Group className={classes.hiddenMobile}>
            <ColorSchemeToggle />
            <AuthGroup />
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <LinkMenu />
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <AuthGroup />
          </Group>
          <Group position="center" grow pb="xl" px="md">
            <ColorSchemeToggle />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
