import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { RootStackParamList } from '../../../routes/Routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CircleCheck } from 'lucide-react-native';
import { useAppTheme } from '../../../hooks/useTheme';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({ navigation }: ScreenProps) {
  const { colors } = useAppTheme();
  function submitForm() {
    // TODO - implement
    navigation.navigate('SuccessScreen', {
      title: 'Success',
      description: 'You are all set! Now go to login to start enjoying the app',
      icon: (
        <CircleCheck
          size={60}
          fill={colors.greenSuccess}
          color={colors.grayWhite}
        />
      ),
    });
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
      <Button
        preset="primary"
        marginTop="s40"
        title="Create account"
        onPress={submitForm}
      />
    </Screen>
  );
}
