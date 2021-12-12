import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';
import {navigate} from '../../../navigation/root-navigation';
import {COLORS} from '../../../themes/styles';
import {screenName} from '../../../utils/constant';

export default class LiveGameItem extends Component {
  render() {
    const {gameItem, onPress} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate(screenName.detail, {id: gameItem.id})}>
        <Image source={{uri: gameItem.preview[0]}} style={styles.liveImg} />
        <View style={styles.liveText}>
          <View style={styles.viewText}>
            <Text style={styles.text}>{gameItem.title}</Text>
          </View>
          <View style={[styles.viewText, {backgroundColor: COLORS.lightRed}]}>
            <Text style={styles.text}>Live</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  liveImg: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  liveText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 20,
  },
  viewText: {
    backgroundColor: COLORS.lightPurple,
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
});
