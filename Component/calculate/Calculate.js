import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default class Calculate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onPressBackonHome = this.onPressBackonHome.bind(this)
    }

    onPressBackonHome() {
        this.props.onclickCalculate()
    }

    render() {
        return (
            <View style={styles.loveresult}>
                <Text onPress={() => this.onPressBackonHome()} style={styles.Result}>Love Result</Text>
                <Text onPress={() => this.onPressBackonHome()} style={styles.percentage}>{this.props.result.percentage}%</Text>
                <Text onPress={() => this.onPressBackonHome()} style={styles.suggest}>{this.props.result.result}</Text>
                <Text onPress={() => this.onPressBackonHome()} style={styles.backlink}>Back</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loveresult: {
        top: 40,
        backgroundColor: "red",
        width: '90%',
        height: 400,
        borderRadius: 20,
        backgroundColor: '#040A07',
        opacity: 0.6,
        borderWidth: 3,
        borderColor: "#64f5ed",
        alignItems: "center"
    },
    Result: {
        fontSize: 20,
        color: "#64f5ed",
    },
    backlink: {
        top: 360,
        position: "absolute",
        fontSize: 20,
        color: "#64f5ed",

    },
    percentage: {
        top: 150,
        position: "absolute",
        fontSize: 40,
        color: "#64f5ed",
    },
    suggest: {
        top: 300,
        position: "absolute",
        fontSize: 20,
        color: "#64f5ed",
    }
})