import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Box, BoxProps, TouchableOpacityBox } from '../Box/Box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { ChevronLeft } from 'lucide-react-native';
import { useTheme } from '@shopify/restyle';
import { Text } from '../Text/Text';
import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer';
import { useNavigation } from '@react-navigation/native';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  style,
  canGoBack = false,
  scrollable = false,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <Container backgroundColor={colors.background}>
        <Box
          flex={1}
          paddingHorizontal="s24"
          style={{ paddingTop: top, paddingBottom: bottom }}
          {...boxProps}
        >
          {canGoBack && (
            <TouchableOpacityBox
              mb="s24"
              flexDirection="row"
              alignItems="center"
              onPress={navigation.goBack}
            >
              <ChevronLeft size="28" color={colors.lightSecondary} />
              <Text preset="paragraphMedium" semibold color="lightSecondary">
                Back
              </Text>
            </TouchableOpacityBox>
          )}

          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
