import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInitial } from 'lucide-react-native';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';

export function SignUpScreen() {
  function submitForm() {
    // TODO - implement
  }
  return (
    <Screen canGoBack>
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
      <TextInput
        label="Password"
        placeholder="Enter your password"
        boxProps={{ mb: 's48' }}
      />
      <Button preset="primary" title="Create account" onPress={submitForm} />
    </Screen>
  );
}
