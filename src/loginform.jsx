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
  } from '@mantine/core';
import React from 'react';
//import { CreateAccount } from './NewAccount';
import { ForgotPassword } from './ForgotPassword';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

  
  export function LoginPage() {
    const handleCreateAccount = () => {
      console.log("Create account");
      return (
        <CreateAccount />
      );
    }

    const handleForgotPassword = () => {
      console.log("Forgot password");

      return (
        <ForgotPassword />
      );

    }

    const handleSignIn = () => {
      console.log("Sign in");
    }


    return (  
        <Container size={420} my={40} align="center">
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Reflash!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          <Anchor href="#" size="sm" onClick={handleCreateAccount}>
            Create account
          </Anchor>
        </Text>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Username" placeholder="username" required />
          <PasswordInput label="Password" placeholder="password" required mt="md" />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
            <Anchor onClick={handleForgotPassword} href="#" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button onClick={handleSignIn} fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>    
    );
  }