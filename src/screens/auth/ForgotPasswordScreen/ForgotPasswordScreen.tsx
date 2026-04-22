import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { RootStackParamList } from '../../../routes/Routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CircleCheck } from 'lucide-react-native';
import { useAppTheme } from '../../../hooks/useTheme';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen(_: ScreenProps) {
  const { colors } = useAppTheme();
  const { reset } = useResetNavigationSuccess();

  function submitForm() {
    reset({
      title: 'Recovery e-mail sent!',
      description:
        'The recovery instructions were sent to your e-mail. Please check your inbox.',
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
    <Screen canGoBack>
      <Text preset="headingLarge" title>
        Forgot your password?
      </Text>
      <Text color="gray2" mt="s16">
        Enter your e-mail in the box below and we will send you the reset
        instructions
      </Text>
      <TextInput label="E-mail" boxProps={{ mb: 's40', mt: 's20' }} />
      <Button title="Recover password" onPress={submitForm} />
    </Screen>
  );
}
