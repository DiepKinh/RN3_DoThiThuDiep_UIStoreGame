import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './ styles.StreamScreen';
import {BackgroundView, Text} from '../../components/index';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../themes/styles';
import {getListGame} from '../../api';
import {mapIP} from '../../utils/common';
import {useDispatch, useSelector} from 'react-redux';
import {getRequestListGame} from '../../redux/thunk/gameThunkAction';
import {getListGameSelector} from '../../redux/selectors/gameSelector';
import LiveGameItem from './components/LiveGameItem';
import {navigate} from '../../navigation/root-navigation';
import {screenName} from '../../utils/constant';

const StreamScreen = () => {
  // const [listGame, setListGame] = useState([]);
  const dispatch = useDispatch();
  const listGame = useSelector(getListGameSelector);

  useEffect(() => {
    // getListGame().then().catch()

    // (async () => {
    //   try {
    //     const result = await getListGame();
    //     setListGame(mapIP(result.data));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();

    dispatch(getRequestListGame());
  }, []);

  return (
    <BackgroundView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleHeader}> Streaming </Text>
        <View style={styles.viewSearch}>
          <TextInput
            style={styles.search}
            placeholder={'Search here ...'}
            placeholderTextColor={COLORS.gray}
          />
          <View style={styles.searchIcon}>
            <AntIcon name="search1" color={COLORS.gray} size={22} />
          </View>
        </View>
      </View>
      <View style={styles.popularContainer}>
        <Text style={styles.titlePopular}> Popular Games </Text>
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          data={listGame}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate(screenName.detail, {id: item.id})}>
              <Image source={{uri: item.icon}} style={styles.popularImg} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.liveContainer}>
        <View style={styles.headerLive}>
          <Text style={styles.titleLive}> Live Games </Text>
          <Text style={styles.subtitleLive}> View All </Text>
        </View>
        <FlatList
          data={listGame}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <LiveGameItem gameItem={item} />}
        />
      </View>
    </BackgroundView>
  );
};

export default StreamScreen;
