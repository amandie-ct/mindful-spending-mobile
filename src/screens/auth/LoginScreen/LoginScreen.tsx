import React from 'react';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Screen } from '../../../components/Screen/Screen';
import { Pressable } from 'react-native';
import { Button } from '../../../components/Button/Button';
import { useTheme } from '@shopify/restyle';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {
  const theme = useTheme();

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen>
      <Text title preset="headingLarge">
        Hello!
      </Text>
      <Text preset="paragraphLarge" color="gray2" marginBottom="s40">
        Enter you e-mail and password
      </Text>

      <TextInput label="E-mail" boxProps={{ mb: 's20' }} />
      <PasswordInput
        label="Password"
        placeholder="Password"
        boxProps={{ mb: 's8' }}
      />
      <Pressable>
        <Text preset="paragraphSmall" bold color="darkSecondary">
          Forgot password
        </Text>
      </Pressable>
      <Button
        preset="primary"
        title="Sign in"
        marginTop="s40"
        marginBottom="s10"
      />
      <Button
        preset="outline"
        title="Create account"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
