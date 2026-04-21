import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  function submitForm() {
    // TODO - implement
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32" title>
        Create account
      </Text>
      <TextInput label="Username" placeholder="@" boxProps={{ mb: 's20' }} />
      <TextInput
        label="Full name"
        placeholder="Enter full name"
        boxProps={{ mb: 's20' }}
      />
      <TextInput
        label="E-mail"
        placeholder="example@email.com"
        boxProps={{ mb: 's20' }}
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        boxProps={{ mb: 's20' }}
      />
      <Button preset="primary" title="Create account" onPress={submitForm} />
    </Screen>
  );
}
