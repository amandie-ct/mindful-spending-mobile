import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from './useTheme';

export function useAppSafeArea() {
  const insets = useSafeAreaInsets();
  const theme = useAppTheme();
  const basePadding = theme.spacing.s20;

  return {
    top: basePadding + insets.top,
    bottom: basePadding + insets.bottom,
  };
}
