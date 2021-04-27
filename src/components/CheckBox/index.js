import React, { PureComponent } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { scaleFont, scaleH, scaleW } from "../../theme/ThemeContext";
import RTMText from "../Text";

const ic_cb_checked_active = require("../../assets/checkbox/ic_cb_checked_active.png");
const ic_cb_unChecked_active = require("../../assets/checkbox/ic_cb_unChecked_active.png");
const ic_cb_checked_disable = require("../../assets/checkbox/ic_cb_checked_disable.png");
const ic_cb_unChecked_disable = require("../../assets/checkbox/ic_cb_unChecked_disable.png");

// interface Props {
//   text: string;
//   iconSize: number;
//   checked: boolean;
//   disable: boolean;
//   onChanged: (checked: boolean) => void;
// }

// interface State {
//   checked: boolean;
// }

export default class RTMCheckBox extends PureComponent {
  static defaultProps = {
    text: "",
    iconSize: scaleH(20),
    checked: false,
    disable: false,
    onChanged: (checked) => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }

  _getIconByStatus = () => {
    const { disable } = this.props;
    const { checked } = this.state;
    if (disable) {
      if (checked) {
        return ic_cb_checked_disable;
      }
      return ic_cb_unChecked_disable;
    }

    if (checked) {
      return ic_cb_checked_active;
    }
    return ic_cb_unChecked_active;
  };

  render() {
    const { text, iconSize, disable, onChanged } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          disabled={disable}
          onPress={() =>
            this.setState({ checked: !this.state.checked }, () =>
              onChanged(this.state.checked)
            )
          }
        >
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            source={this._getIconByStatus()}
            style={{
              alignSelf: "center",
              marginEnd: scaleW(10),
              width: iconSize,
              height: iconSize,
            }}
          />
        </TouchableOpacity>
        {!!text && (
          <RTMText
            style={{
              // lineHeight: scaleFont(14),
              fontSize: scaleFont(14),
              textAlignVertical: "center",
            }}
          >
            {text}
          </RTMText>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
