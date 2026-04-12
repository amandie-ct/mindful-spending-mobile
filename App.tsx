import { ThemeProvider } from '@shopify/restyle';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { Button } from './src/components/Button/Button';
import { Screen } from './src/components/Screen/Screen';
import { theme } from './src/theme/theme';

function AppContent() {
  return (
    <Screen
      backgroundColor="grayWhite"
      paddingHorizontal="s24"
      justifyContent="center"
      style={{ gap: 8}}
    >
      <Button title="Primary" preset='primary' />
            <Button title="Outlined" preset='outline' />
            <Button title="Disabled" disabled />
            <Button title="Secondary" preset='secondary' />
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
