import { ThemeProvider, useTheme } from '@shopify/restyle';
import { Button } from './src/components/Button/Button';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View } from 'react-native';

import { theme } from './src/theme/theme';

function App() {
  // const insets = useSafeAreaInsets();
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <View style={{ paddingHorizontal: 24}}>
        <Button title="Get started" />
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
