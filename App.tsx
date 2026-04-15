import { ThemeProvider } from '@shopify/restyle';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { Button } from './src/components/Button/Button';
import { Text } from './src/components/Text/Text';
import { Screen } from './src/components/Screen/Screen';
import { theme } from './src/theme/theme';
import { TextInput } from './src/components/TextInput/TextInput';
import { Pressable, Alert } from 'react-native';
import { Eye } from 'lucide-react-native';

function AppContent() {
  const handleClick = () => {
    Alert.alert('Clicouuu');
  };

  return (
    <Screen
      backgroundColor="grayWhite"
      paddingHorizontal="s24"
      justifyContent="flex-start"
      style={{ gap: 8 }}
    >
      <Text title preset="headingLarge">
        Hello!
      </Text>
      <Text preset="paragraphLarge" color="gray2" marginBottom="s40">
        Enter you e-mail and password
      </Text>

      <TextInput label="E-mail" errorMessage="Email inválido" />
      <TextInput
        label="Password"
        RightComponent={<Eye size={24} color={theme.colors.gray2} />}
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppContent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
