import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { RootStackParamList } from '../../../routes/Routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" title>
        Forgot your password?
      </Text>
      <Text color="gray2" mt="s16">
        Enter your e-mail below so we can send you the reset link
      </Text>
      <TextInput label="E-mail" boxProps={{ mb: 's40', mt: 's20' }} />
      <Button title="Recover password" />
    </Screen>
  );
}
