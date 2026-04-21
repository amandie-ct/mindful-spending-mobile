import React, { useState } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { Eye, EyeClosed } from 'lucide-react-native';
import { useAppTheme } from '../../hooks/useTheme';
import { TextInputProps } from '../TextInput/TextInput';
import { Pressable } from 'react-native';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const { colors } = useAppTheme();
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      {...props}
      secureTextEntry={isSecureTextEntry}
      RightComponent={
        <Pressable onPress={toggleSecureTextEntry} hitSlop={10}>
          {isSecureTextEntry ? (
            <EyeClosed size={24} color={colors.gray2} />
          ) : (
            <Eye size={24} color={colors.gray2} />
          )}
        </Pressable>
      }
    />
  );
}
