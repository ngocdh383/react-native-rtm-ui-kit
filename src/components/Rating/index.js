import React, { PureComponent } from "react";
import { FlatList, Image, ViewStyle } from "react-native";
import { scaleH, scaleW } from "../../theme/ThemeContext";

const ic_full_start = require("../../assets/rating/ic_full_start.png");
const ic_half_start = require("../../assets/rating/ic_half_start.png");
const ic_unfill_star = require("../../assets/rating/ic_unfill_star.png");

// interface Props {
//   size: number;
//   value: number;
//   total: number;
//   containerStyle: ViewStyle;
// }

// interface State {}

export default class RTMRating extends PureComponent {
  static defaultProps = {
    size: scaleH(16),
    value: 0,
    total: 5,
    containerStyle: {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { size, value, total, containerStyle } = this.props;

    if (total < 1) {
      return null;
    }

    const halfStar = Math.abs(value - Math.round(value));
    if (halfStar !== 0.5 && halfStar !== 0) {
      return null;
    }

    return (
      <FlatList
        style={containerStyle}
        horizontal={true}
        data={Array(total).fill(1)}
        renderItem={({ index }) => {
          if (halfStar === 0.5 && Math.round(value) - 1 === index) {
            return (
              <Image
                key={index}
                style={{
                  width: size,
                  height: size,
                  marginStart: index === 0 ? 0 : scaleW(2),
                }}
                source={ic_half_start}
              />
            );
          }

          if (value > 0 && index < value) {
            return (
              <Image
                key={index}
                style={{
                  width: size,
                  height: size,
                  marginStart: index === 0 ? 0 : scaleW(2),
                }}
                source={ic_full_start}
              />
            );
          }

          return (
            <Image
              key={index}
              style={{
                width: size,
                height: size,
                marginStart: index === 0 ? 0 : scaleW(2),
              }}
              source={ic_unfill_star}
            />
          );
        }}
      />
    );
  }
}
