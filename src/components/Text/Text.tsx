import React from 'react';
import { Platform, TextStyle } from 'react-native';
import { createText } from '@shopify/restyle';
import { Theme } from '../../theme/theme';

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

type SRTextProps = React.ComponentProps<typeof SRText>;

interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semibold?: boolean;
  title?: boolean;
}

const SRText = createText<Theme>();

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26.4 },
  headingSmall: { fontSize: 18, lineHeight: 23.4 },

  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

  paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
  paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
};

const fontName = (ios: string, defaultName: string) =>
  Platform.select({
    ios,
    default: defaultName,
  }) ?? defaultName;

export const $fontFamily = {
  abrilTitle: fontName('AbrilFatface-Regular', 'AbrilFatface-Regular'),
  black: fontName('Raleway-Black', 'Raleway-Black-Original'),
  blackItalic: fontName('Raleway-BlackItalic', 'Raleway-Black-Italic-Original'),
  bold: fontName('Raleway-Bold', 'Raleway-Bold-Original'),
  boldItalic: fontName('Raleway-BoldItalic', 'Raleway-Bold-Italic-Original'),
  extraBold: fontName('Raleway-ExtraBold', 'Raleway-ExtraBold-Original'),
  extraBoldItalic: fontName(
    'Raleway-ExtraBoldItalic',
    'Raleway-ExtraBold-Italic-Original',
  ),
  extraLight: fontName('Raleway-ExtraLight', 'Raleway-ExtraLight-Original'),
  extraLightItalic: fontName(
    'Raleway-ExtraLightItalic',
    'Raleway-ExtraLight-Italic-Original',
  ),
  light: fontName('Raleway-Light', 'Raleway-Light-Original'),
  lightItalic: fontName('Raleway-LightItalic', 'Raleway-Light-Italic-Original'),
  medium: fontName('Raleway-Medium', 'Raleway-Medium-Original'),
  mediumItalic: fontName(
    'Raleway-MediumItalic',
    'Raleway-Medium-Italic-Original',
  ),
  regular: fontName('Raleway-Regular', 'Raleway-Regular-Original'),
  regularItalic: fontName('Raleway-Italic', 'Raleway-Regular-Italic-Original'),
  semiBold: fontName('Raleway-SemiBold', 'Raleway-SemiBold-Original'),
  semiBoldItalic: fontName(
    'Raleway-SemiBoldItalic',
    'Raleway-SemiBold-Italic-Original',
  ),
  thin: fontName('Raleway-Thin', 'Raleway-Thin-Original'),
  thinItalic: fontName('Raleway-ThinItalic', 'Raleway-Thin-Italic-Original'),
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
      return $fontFamily.extraBold;
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
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semibold, title);
  return (
    <SRText
      {...sRTextProps}
      style={[$fontSizes[preset], { fontFamily }, style]}
    >
      {children}
    </SRText>
  );
}
