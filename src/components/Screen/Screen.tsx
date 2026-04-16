import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppTheme } from '../../hooks/useTheme';
import { Box, BoxProps } from '../Box/Box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
}

export function Screen({ children, style, ...boxProps }: ScreenProps) {
  const { top, bottom } = useAppSafeArea();

  return (
    <Box
      flex={1}
      backgroundColor="lightPrimary"
      paddingHorizontal="s24"
      style={{ paddingTop: top, paddingBottom: bottom }}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
