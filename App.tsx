import { ThemeProvider } from '@shopify/restyle';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { theme } from './src/theme/theme';
import { Router } from './src/routes/Routes';

function AppContent() {
  return <Router />;
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
