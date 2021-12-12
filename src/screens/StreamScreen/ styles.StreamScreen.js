import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';

export default StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleHeader: {
    fontSize: 30,
    fontWeight: '700',
  },
  viewSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    height: 50,
    width: '90%',
    backgroundColor: COLORS.lightOpacity,
    borderRadius: 25,
    color: COLORS.white,
    paddingHorizontal: 20,
  },
  searchIcon: {
    position: 'absolute',
    right: 40,
  },
  popularContainer: {
    paddingHorizontal: 10,
    flex: 1,
    marginTop: 20,
  },

  popularImg: {
    height: 80,
    width: 80,
    borderRadius: 8,
    marginRight: 30,
  },
  liveContainer: {
    flex: 4,
    paddingHorizontal: 10,
  },
  headerLive: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  titleLive: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitleLive: {
    color: COLORS.lightBack,
  },
});
