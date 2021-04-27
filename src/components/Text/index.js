import React, { PureComponent } from "react";
import { TextProps, Text, StyleSheet } from "react-native";
import { DefaultTheme } from "../../theme/ThemeContext";

// interface Props extends TextProps {}

// interface State {}

export default class RTMText extends PureComponent {
  render() {
    const { children, style, ...textProps } = this.props;
    return (
      <Text {...textProps} style={[styles.defaultStyle, style]}>
        {children || ""}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "SVN-Poppins",
    color: DefaultTheme.Palette.BLACK_3,
  },
});
