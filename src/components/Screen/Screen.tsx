import React from 'react';
import { StyleSheet } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

import { Box, BoxProps } from '../Box/Box';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  edges?: Edge[];
}

export function Screen({
  children,
  edges = ['top', 'bottom'],
  ...boxProps
}: ScreenProps) {
  return (
    <SafeAreaView edges={edges} style={styles.safeArea}>
      <Box flex={1} {...boxProps} backgroundColor='lightPrimary'>
        {children}
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
