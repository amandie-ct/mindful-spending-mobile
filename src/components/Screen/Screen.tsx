import React from 'react';
import { Box, BoxProps } from '../Box/Box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { ArrowLeft, ChevronLeft } from 'lucide-react-native';
import { useTheme } from '@shopify/restyle';
import { Text } from '../Text/Text';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({
  children,
  style,
  canGoBack = false,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useTheme();

  return (
    <Box
      flex={1}
      backgroundColor="lightPrimary"
      paddingHorizontal="s24"
      style={{ paddingTop: top, paddingBottom: bottom }}
      {...boxProps}
    >
      {canGoBack && (
        <Box mb="s24" flexDirection="row" alignItems="center">
          <ChevronLeft size="28" color={colors.lightSecondary} />
          <Text preset="paragraphMedium" semibold color="lightSecondary">
            Back
          </Text>
        </Box>
      )}

      {children}
    </Box>
  );
}
