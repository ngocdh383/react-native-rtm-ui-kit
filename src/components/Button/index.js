import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,

} from "react-native";
import {
  DefaultTheme,
  scale,
  scaleFont,
  scaleH,
  scaleW,
} from "../../theme/ThemeContext";

export default class RTMButton extends PureComponent {
  static defaultProps = {
    size: "normal",
    titleStyle: {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, size, titleStyle, style, ...touchableProps } = this.props;
    const containerBySize =
      size === "normal"
        ? styles.normalContainer
        : size === "big"
          ? styles.bigContainer
          : styles.smallContainer;

    const textbySize =
      size === "normal"
        ? styles.normalText
        : size === "big"
          ? styles.bigText
          : styles.smallText;

    const backgroundColor =
      touchableProps.disabled === true ? styles.inactive : styles.active;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        {...touchableProps}
        style={[styles.container, containerBySize, backgroundColor, style]}
      >
        <Text style={[styles.text, textbySize, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  bigContainer: {
    height: scaleH(50),
  },

  normalContainer: {
    height: scaleH(42),
  },

  smallContainer: {
    height: scaleH(32),
  },

  bigText: {
    fontSize: scaleFont(16),
  },

  normalText: {
    fontSize: scaleFont(14),
  },

  smallText: {
    fontSize: scaleFont(13),
  },

  container: {
    borderRadius: scale(6),
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scaleW(16),
  },

  active: {
    backgroundColor: DefaultTheme.Palette.PRIMARY,
  },

  inactive: {
    backgroundColor: DefaultTheme.Palette.PRIMARY_INACTIVE,
  },

  text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "SVN-Poppins",
    color: DefaultTheme.Palette.WHITE,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
  },
});
