import React, { PureComponent } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import RTMText from "../Text";
import { DefaultTheme, scaleFont, scaleH } from "../../theme/ThemeContext";
import NormalTextInput from "./NormalTextInput";

// interface Props extends NormalTextInputProps {
//   showLabel: boolean;
//   label: string;
//   onPress: () => void;
// }

// interface State {
//   focused: boolean;
// }

export default class UnderLineTextInput extends PureComponent {
  static defaultProps = {
    showLabel: true,
    label: "",
    type: "normal",
    error: "",
    showIconRight: false,
    showIconLeft: false,
    containerStyle: {},
    rightIconContainer: {},
    leftIconContainer: {},
    iconRight: () => null,
    iconLeft: () => null,
    iconRightActiveOpacity: 1,
    iconLeftActiveOpacity: 1,
    onPressIconRight: () => { },
    onPressIconLeft: () => { },
    onPress: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  _hasError = () => {
    const { error } = this.props;
    return error && error !== "";
  };

  _getFocusStyle = () => {
    const { focused } = this.state;
    if (this._hasError()) {
      return styles.focusedError;
    }

    if (focused) {
      return styles.focusedNormal;
    }

    return styles.noFocus;
  };

  _renderLabel = () => {
    const { label, type } = this.props;
    const fontSize = type === "big" ? 16 : type === "normal" ? 14 : 12;
    return (
      <RTMText style={[styles.lable, { fontSize: scaleFont(fontSize) }]}>
        {label}
      </RTMText>
    );
  };

  _renderUnderLine = () => {
    const focusStyle = this._getFocusStyle();
    return (
      <View style={[styles.underline, { backgroundColor: focusStyle.color }]} />
    );
  };

  _renderTextInput = () => {
    const {
      label,
      containerStyle,
      type,
      style,
      onFocus,
      onBlur,
      ...textInputProps
    } = this.props;
    const inputTypeBySize =
      type === "normal"
        ? styles.normal
        : type === "big"
          ? styles.big
          : styles.small;

    const styleBySize =
      type === "normal"
        ? styles.normalIconContainer
        : type === "big"
          ? styles.bigIconContainer
          : styles.smallIconContainer;

    return (
      <NormalTextInput
        {...textInputProps}
        type={type}
        style={[
          inputTypeBySize,
          style,
          {
            paddingStart: 0,
            paddingEnd: 0,
          },
        ]}
        leftIconContainer={styleBySize}
        rightIconContainer={styleBySize}
        containerStyle={styles.defautTextInputContainer}
        onFocus={(e) =>
          onFocus ? onFocus(e) : this.setState({ focused: true })
        }
        onBlur={(e) => (onBlur ? onBlur(e) : this.setState({ focused: false }))}
      />
    );
  };

  render() {
    const { showLabel, containerStyle, onPress } = this.props;
    const focusStyle = this._getFocusStyle();
    return (
      <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
        <View style={[styles.container, containerStyle]}>
          {showLabel && this._renderLabel()}
          {this._renderTextInput()}
          {this._renderUnderLine()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {},

  big: {
    height: scaleH(42),
    fontSize: scaleFont(16),
  },

  normal: {
    height: scaleH(32),
    fontSize: scaleFont(14),
  },

  small: {
    height: scaleH(24),
    fontSize: scaleFont(12),
  },

  bigIconContainer: {
    height: scaleH(42),
    width: scaleH(42),
  },

  normalIconContainer: {
    height: scaleH(32),
    width: scaleH(32),
  },

  smallIconContainer: {
    height: scaleH(24),
    width: scaleH(24),
  },

  lable: {
    fontFamily: "SVN-Poppins SemiBold",
    fontWeight: "600",
    color: DefaultTheme.Palette.BLACK_2,
  },

  underline: {
    height: Math.max(1, scaleH(1)),
  },

  defautTextInputContainer: {
    backgroundColor: "transparent",
    borderRadius: 0,
    borderWidth: 0,
  },

  noFocus: {
    color: DefaultTheme.Palette.UNDER_LINE,
  },

  focusedNormal: {
    color: "#006ff4",
  },

  focusedError: {
    color: "#FF3548",
  },
});
