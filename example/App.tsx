import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  RTMButton,
  RTMCheckBox,
  RTMHeader,
  RTMNormalTextInput,
  RTMRating,
  RTMText,
  RTMUnderLineTextInput,
} from 'react-native-rtm-ui-kit';

export default class App extends Component {
  _renderSeperateLine = () => {
    return <View style={{height: 16}}></View>;
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <RTMButton title="Button" onPress={() => {}} size="small" />
          {this._renderSeperateLine()}
          <RTMButton title="Button" onPress={() => {}} size="normal" />
          {this._renderSeperateLine()}
          <RTMButton title="Button" size="big" />
          {this._renderSeperateLine()}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <RTMCheckBox text="Checkbox" />
            <RTMCheckBox text="Checkbox" checked />
          </View>
          {this._renderSeperateLine()}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <RTMCheckBox text="Checkbox" disable />
            <RTMCheckBox text="Checkbox" disable checked />
          </View>
          {this._renderSeperateLine()}
          <RTMNormalTextInput />
          {this._renderSeperateLine()}
          <RTMUnderLineTextInput />
          {this._renderSeperateLine()}
          <RTMRating />
          {this._renderSeperateLine()}
          <RTMRating value={3.5} />
          {this._renderSeperateLine()}
          <RTMText>RTMText</RTMText>
          {this._renderSeperateLine()}
          <RTMHeader title="Header" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
});
