import React from 'react';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Screen } from '../../../components/Screen/Screen';
import { Pressable, Alert } from 'react-native';
import { Eye } from 'lucide-react-native';
import { Button } from '../../../components/Button/Button';
import { useTheme } from '@shopify/restyle';

export function LoginScreen() {
  const theme = useTheme();

  const handleClick = () => {
    Alert.alert('Clicouuu');
  };

  return (
    <Screen>
      <Text title preset="headingLarge">
        Hello!
      </Text>
      <Text preset="paragraphLarge" color="gray2" marginBottom="s40">
        Enter you e-mail and password
      </Text>

      <TextInput
        label="E-mail"
        errorMessage="Email inválido"
        boxProps={{ mb: 's8' }}
      />
      <TextInput
        label="Password"
        RightComponent={<Eye size={24} color={theme.colors.gray2} />}
        boxProps={{ mb: 's8' }}
      />
      <Pressable onPress={handleClick}>
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
      <Button preset="outline" title="Create account" />
    </Screen>
  );
}
