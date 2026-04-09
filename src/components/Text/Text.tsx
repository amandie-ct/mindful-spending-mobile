import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

interface TextProps extends RNTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semibold?: boolean;
  title?: boolean;
}

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26.4 },
  headingSmall: { fontSize: 18, lineHeight: 23.4 },

  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

  paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
  paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
};

export const $fontFamily = {
  abrilTitle: 'AbrilFatface-Regular',
  black: 'Raleway-Black-Original',
  blackItalic: 'Raleway-Black-Italic-Original',
  bold: 'Raleway-Bold-Original',
  boldItalic: 'Raleway-Bold-Italic-Original',
  extraBold: 'Raleway-ExtraBold-Original',
  extraBoldItalic: 'Raleway-ExtraBold-Italic-Original',
  extraLight: 'Raleway-ExtraLight-Original',
  extraLightItalic: 'Raleway-ExtraLight-Italic-Original',
  light: 'Raleway-Light-Original',
  lightItalic: 'Raleway-Light-Italic-Original',
  medium: 'Raleway-Medium-Original',
  mediumItalic: 'Raleway-Medium-Italic-Original',
  regular: 'Raleway-Regular-Original',
  regularItalic: 'Raleway-Regular-Italic-Original',
  semiBold: 'Raleway-SemiBold-Original',
  semiBoldItalic: 'Raleway-SemiBold-Italic-Original',
  thin: 'Raleway-Thin-Original',
  thinItalic: 'Raleway-Thin-Italic-Original',
};

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semibold?: boolean,
  title?: boolean,
): string {
  if (title) {
    return $fontFamily.abrilTitle;
  }

  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case semibold && italic:
      return $fontFamily.semiBoldItalic;
    case semibold:
      return $fontFamily.semiBold;
    default:
      return $fontFamily.regular;
  }
}

export function Text({
  children,
  style,
  bold = false,
  italic,
  semibold,
  title,
  preset = 'paragraphMedium',
  ...rest
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semibold, title);
  return (
    <RNText {...rest} style={[$fontSizes[preset], { fontFamily }, style]}>
      {children}
    </RNText>
  );
}
