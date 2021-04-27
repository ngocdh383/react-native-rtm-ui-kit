import React, { PureComponent } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RTMText from "../Text";
import {
  DefaultTheme,
  scaleFont,
  scaleH,
  scaleW,
} from "../../theme/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";

// interface Props {
//   title: string;
//   showButtonRight: boolean;
//   showButtonLeft: boolean;
//   disableButtonRight: boolean;
//   disableButtonLeft: boolean;
//   iconRight: () => JSX.Element;
//   iconLeft: () => JSX.Element;
//   onPressIconRight: () => void;
//   onPressIconLeft: () => void;
//   containerStyle: ViewStyle;
// }

// interface State {}

export default class RTMHeader extends PureComponent {
  static defaultProps = {
    title: "",
    showButtonRight: false,
    showButtonLeft: false,
    disableButtonRight: false,
    disableButtonLeft: false,
    iconRight: () => null,
    iconLeft: () => null,
    onPressIconRight: () => {},
    onPressIconLeft: () => {},
    containerStyle: {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderIcon = (icon, onClick, disable) => {
    return (
      <TouchableOpacity
        disabled={disable}
        activeOpacity={0.7}
        onPress={onClick}
        style={styles.iconContainer}
      >
        {icon()}
      </TouchableOpacity>
    );
  };

  _renderPlaceHolderView = () => {
    return <View style={styles.iconContainer}></View>;
  };

  _renderDefault = () => {
    const {
      title,
      showButtonLeft,
      showButtonRight,
      disableButtonLeft,
      disableButtonRight,
      iconLeft,
      iconRight,
      onPressIconLeft,
      onPressIconRight,
    } = this.props;
    return (
      <View style={{ flexDirection: "row" }}>
        {showButtonLeft
          ? this._renderIcon(iconLeft, onPressIconLeft, disableButtonLeft)
          : this._renderPlaceHolderView()}
        <View style={styles.titleCotainer}>
          <RTMText style={styles.headerTitle}>{title}</RTMText>
        </View>
        {showButtonRight
          ? this._renderIcon(iconRight, onPressIconRight, disableButtonRight)
          : this._renderPlaceHolderView()}
      </View>
    );
  };

  render() {
    const { children, containerStyle } = this.props;
    return (
      <LinearGradient
        colors={["#4BACDE", "#008BD2"]}
        end={{ x: 0.0818, y: 0.9291 }}
        style={styles.container}
      >
        <SafeAreaView
          edges={["top", "left", "right"]}
          style={[styles.mainContainer, containerStyle]}
        >
          {children ? children : this._renderDefault()}
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },

  mainContainer: {},

  titleCotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontFamily: "SVN-Poppins SemiBold",
    fontWeight: "600",
    color: DefaultTheme.Palette.WHITE,
    fontSize: scaleFont(19),
    marginTop: scaleH(15),
    marginBottom: scaleH(12),
  },

  iconContainer: {
    width: scaleW(2 * 16 + 24),
    justifyContent: "center",
    alignItems: "center",
  },
});
