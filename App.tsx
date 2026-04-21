import { ThemeProvider } from '@shopify/restyle';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { theme } from './src/theme/theme';
import { SignUpScreen } from './src/screens/auth/SignUpScreen/SignUpScreen';

function AppContent() {
  return <SignUpScreen />;
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
