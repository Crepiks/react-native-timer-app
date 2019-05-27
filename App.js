import React from 'react';
import {    StyleSheet, 
            Text, 
            View, 
            StatusBar,
            TouchableOpacity,
            Dimensions
        } from 'react-native';

const screen = Dimensions.get('window');

export default class App extends React.Component {

    state = {
        remainingSeconds: 353
    }

    formatNumber = (number) => {
        return `0${number}`.slice(-2);
    }

    getRemaining = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;
        return { minutes: this.formatNumber(minutes), seconds: this.formatNumber(seconds) };
    }

    render() {
        const { minutes, seconds } = this.getRemaining(this.state.remainingSeconds)

        return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
            <TouchableOpacity onPress={() => alert('Button is clicked')} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    color: "#fff",
    fontSize: 90
  },
  button: {
    marginTop: 30,
    width: screen.width / 2,
    height: screen.width / 2,
    borderWidth: 10,
    borderColor: '#89AAFF',
    borderRadius: screen.width / 2, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#89AAFF',
    fontSize: 45
  }
});
