import React, {Component} from 'react';
import {
  Text as RNText,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text} from '../../../components';
import {navigate} from '../../../navigation/root-navigation';
import {COLORS} from '../../../themes/styles';
import {screenName} from '../../../utils/constant';

export default class PurchasedGame extends Component {
  render() {
    const {gameItem, onPress} = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, {justifyContent: 'space-between'}]}
        activeOpacity={0.8}
        onPress={() => navigate(screenName.detail, {id: gameItem.id})}>
        <View style={styles.container}>
          <Image source={{uri: gameItem.icon}} style={styles.liveImg} />
          <View style={styles.liveText}>
            <Text style={styles.text}>{gameItem.title}</Text>
            <Text>800 Sales</Text>
          </View>
        </View>
        <View>
          <RNText style={styles.textPrice}>${gameItem.rating}</RNText>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  liveImg: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginTop: 10,
  },
  liveText: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  viewText: {
    backgroundColor: COLORS.lightPurple,
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
  },
  textPrice: {
    color: COLORS.lightPurple,
    fontWeight: '600',
  },
});
