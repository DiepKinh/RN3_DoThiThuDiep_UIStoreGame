import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/styles';

export default StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    backgroundColor: COLORS.lightPurple,
    borderRadius: 50,
  },
  name: {
    flex: 1,
    fontWeight: '700',
    fontSize: 22,
    marginTop: 10,
  },
  contentItem: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  item: {
    backgroundColor: COLORS.lightPurple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 30,
    width: 100,
    marginHorizontal: 5,
  },
  textItem: {
    fontSize: 16,
    fontWeight: '700',
  },
  quantity: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  purchased: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 10,
  },
  numberName: {
    fontSize: 14,
    fontWeight: '300',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
