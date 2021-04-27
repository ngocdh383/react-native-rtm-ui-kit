import React, { PureComponent } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import {
  DefaultTheme,
  scale,
  scaleFont,
  scaleH,
  scaleW,
} from "../../theme/ThemeContext";

// type Size = "big" | "normal" | "small";

// export interface NormalTextInputProps extends TextInputProps {
//   type: Size;
//   error: string | null | undefined;
//   containerStyle: ViewStyle;
//   rightIconContainer: ViewStyle;
//   leftIconContainer: ViewStyle;
//   showIconRight: boolean;
//   showIconLeft: boolean;
//   iconRight: () => JSX.Element;
//   iconLeft: () => JSX.Element;
//   onPressIconRight: () => void;
//   onPressIconLeft: () => void;
//   iconRightActiveOpacity: number;
//   iconLeftActiveOpacity: number;
// }
// interface State {
//   focused: boolean;
// }

export default class NormalTextInput extends PureComponent {
  static defaultProps = {
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
    onPressIconRight: () => {},
    onPressIconLeft: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  /****************************************************************
   * Component Lifecycle Methods                                  *
   ***************************************************************/

  /****************************************************************
   * Logic Methods                                                *
   ***************************************************************/

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

  /****************************************************************
   * Render Methods                                               *
   ***************************************************************/

  _renderTextInput = () => {
    const {
      type,
      showIconRight,
      showIconLeft,
      iconRight,
      iconLeft,
      onPressIconRight,
      onPressIconLeft,
      style,
      placeholderTextColor,
      selectionColor,
      onFocus,
      onBlur,
      ...textInputProps
    } = this.props;

    const textInputStyleBySize =
      type === "normal"
        ? styles.normalTextInput
        : type === "big"
        ? styles.bigTextInput
        : styles.smallTextInput;

    const padding = {
      paddingStart: showIconLeft ? 0 : scaleW(10),
      paddingEnd: showIconRight ? 0 : scaleW(10),
    };

    return (
      <TextInput
        {...textInputProps}
        onFocus={(e) => {
          onFocus ? onFocus(e) : this.setState({ focused: true });
        }}
        onBlur={(e) => {
          onBlur ? onBlur(e) : this.setState({ focused: false });
        }}
        style={[
          textInputStyleBySize,
          padding,
          styles.defaultTextInput,
          style || {},
        ]}
        placeholderTextColor={
          placeholderTextColor || DefaultTheme.Palette.BLACK_4
        }
      />
    );
  };

  _renderIconLeft = () => {
    const {
      type,
      iconLeftActiveOpacity,
      leftIconContainer,
      iconLeft,
      onPressIconLeft,
    } = this.props;
    const styleBySize =
      type === "normal"
        ? styles.normalIconContainer
        : type === "big"
        ? styles.bigIconContainer
        : styles.smallIconContainer;

    return (
      <TouchableOpacity
        activeOpacity={iconLeftActiveOpacity}
        style={[styleBySize, styles.defaultIconContainer, leftIconContainer]}
        onPress={() => onPressIconLeft && onPressIconLeft()}
      >
        {iconLeft && iconLeft()}
      </TouchableOpacity>
    );
  };

  _renderIconRight = () => {
    const {
      type,
      iconRightActiveOpacity,
      rightIconContainer,
      iconRight,
      onPressIconRight,
    } = this.props;

    const styleBySize =
      type === "normal"
        ? styles.normalIconContainer
        : type === "big"
        ? styles.bigIconContainer
        : styles.smallIconContainer;

    return (
      <TouchableOpacity
        activeOpacity={iconRightActiveOpacity}
        style={[styleBySize, styles.defaultIconContainer, rightIconContainer]}
        onPress={() => onPressIconRight && onPressIconRight()}
      >
        {iconRight && iconRight()}
      </TouchableOpacity>
    );
  };

  render() {
    const { showIconLeft, showIconRight, containerStyle } = this.props;
    const focusStyle = this._getFocusStyle();

    return (
      <View
        style={[styles.container, focusStyle, styles.shadow, containerStyle]}
      >
        {showIconLeft && this._renderIconLeft()}
        {this._renderTextInput()}
        {showIconRight && this._renderIconRight()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigTextInput: {
    height: scaleH(50),
    fontSize: scaleFont(16),
  },

  normalTextInput: {
    height: scaleH(40),
    fontSize: scaleFont(14),
  },

  smallTextInput: {
    height: scaleH(32),
    fontSize: scaleFont(14),
  },

  bigIconContainer: {
    height: scaleH(50),
    width: scaleH(50),
  },

  normalIconContainer: {
    height: scaleH(40),
    width: scaleH(40),
  },

  smallIconContainer: {
    height: scaleH(32),
    width: scaleH(32),
  },

  container: {
    flexDirection: "row",
    borderRadius: scale(6),
    borderWidth: scaleW(1),
    backgroundColor: DefaultTheme.Palette.WHITE,
  },

  defaultTextInput: {
    padding: 0,
    paddingTop: scaleH(3),
    flex: 1,
    color: DefaultTheme.Palette.BLACK_2,
    fontFamily: "SVN-Poppins",
    fontWeight: "400",
  },

  defaultIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  shadow: {},

  noFocus: {
    borderColor: DefaultTheme.Palette.LIGHT,
  },

  focusedNormal: {
    borderColor: "#006ff4",
  },

  focusedError: {
    borderColor: "#FF3548",
  },
});
