import { ActivityIndicator } from "../ActivityIndicator/ActivityIndicator";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { Text } from "../Text/Text";
import { buttonPresets } from "./buttonPresets";

export type ButtonPreset = 'primary' | 'outline' | 'secondary' | 'outlineSecondary';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={60}
      alignItems="center"
      justifyContent="center"
      borderRadius="s24"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="headingSmall" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}