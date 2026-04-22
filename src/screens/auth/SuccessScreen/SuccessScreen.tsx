import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { RootStackParamList } from '../../../routes/Routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ route }: ScreenProps) {
  function goBackToStart() {
    // TODO: navegar para tela de login
  }
  return (
    <Screen>
      {route.params.icon}
      <Text preset="headingLarge" title mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" color="gray2" mt="s16">
        {route.params.description}
      </Text>
      <Button title="Back to start" onPress={goBackToStart} mt="s40" />
    </Screen>
  );
}
