import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';
import { useAppTheme } from '../../hooks/useTheme';
import { useRef } from 'react';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const { colors } = useAppTheme();

  function focusInput() {
    inputRef.current?.focus();
  }

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's24',
    flexDirection: 'row',
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" semibold marginBottom="s8">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            {...rnTextInputProps}
            style={{ ...$textInputStyle }}
            placeholderTextColor={colors.gray2}
          />
          {RightComponent && (
            <Box
              width={20}
              height={20}
              marginLeft="s16"
              justifyContent="center"
            >
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text
            preset="paragraphSmall"
            semibold
            color="error"
            paddingLeft="s8"
            paddingTop="s4"
          >
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
  flexGrow: 1,
  flexShrink: 1,
};
