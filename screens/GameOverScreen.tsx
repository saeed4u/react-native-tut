import React from 'react'
import {View, StyleSheet, Text} from 'react-native';

const GameOverScreen = (props:any) => {
    return <View style={styles.screen}>
        <Text>The game is over</Text>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen;