import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Logo from '../assets/logo.png';

export default function Home(){
    return(
        <View style={style.container}>
            <View style={styles.header}>
                <Image source={Logo}></Image>
            </View>

        </View>

    );
}