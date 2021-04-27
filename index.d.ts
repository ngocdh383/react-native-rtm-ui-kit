import React from "react";
import { TouchableOpacityProps, TextStyle } from "react-native";

export type Size = "big" | "normal" | "small";

export interface RTMButtonProps extends TouchableOpacityProps {
  titleStyle?: TextStyle;
  title?: string;
  size?: Size;
}

export class RTMButton extends React.PureComponent<RTMButtonProps> {}

export class RTMCheckBox extends React.PureComponent<RTMButtonProps> {}

export class RTMHeader extends React.PureComponent<RTMButtonProps> {}

export class RTMRating extends React.PureComponent<RTMButtonProps> {}

export class RTMText extends React.PureComponent<RTMButtonProps> {}

export class RTMNormalTextInput extends React.PureComponent<RTMButtonProps> {}

export class RTMUnderLineTextInput extends React.PureComponent<RTMButtonProps> {}
