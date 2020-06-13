import {StyleSheet} from 'react-native';
import Constant from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constant.statusBarHeight+20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    map: {
        flex: 1
    },
});

