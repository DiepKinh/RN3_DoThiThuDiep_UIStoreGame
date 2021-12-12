import React, {Component, useEffect} from 'react';
import {Text as RNText, StyleSheet, View, FlatList} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {BackgroundView, Text} from '../../components';
import {getListGameSelector} from '../../redux/selectors/gameSelector';
import {getRequestListGame} from '../../redux/thunk/gameThunkAction';
import {COLORS} from '../../themes/styles';
import PurchasedGame from './components/PurchasedGame';
import styles from './styles.profile';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const listGame = useSelector(getListGameSelector);
  useEffect(() => {
    dispatch(getRequestListGame());
  }, []);
  return (
    <BackgroundView style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={{flex: 6, justifyContent: 'flex-end'}}>
          <View style={styles.avatar} />
        </View>
        <Text style={styles.name}>CyberSoft</Text>
        <View style={styles.contentItem}>
          <View style={styles.item}>
            <Text style={styles.textItem}>Pro Gamer</Text>
          </View>
          <View style={[styles.item, {backgroundColor: COLORS.lightYellow}]}>
            <RNText style={styles.textItem}>Pro Coder</RNText>
          </View>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.number}>
            240 <Text style={styles.numberName}>Games</Text>
          </Text>
          <Text style={styles.number}>
            4 <Text style={styles.numberName}>Purchased</Text>
          </Text>
        </View>
        <View style={styles.purchased}>
          <Text style={[styles.numberName, {fontSize: 20}]}>
            Purchased Games
          </Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={listGame}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <PurchasedGame gameItem={item} />}
        />
      </View>
    </BackgroundView>
  );
};
export default ProfileScreen;

// export default ProfileScreen;
