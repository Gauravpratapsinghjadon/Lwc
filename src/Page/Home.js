import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, Button } from 'react-native'
import backimage from '../assets/backimage.jpg'
import { apisAreAvailable } from 'expo';
import Calculate from '../../Component/calculate/Calculate'
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            love: false,
            fname: '',
            sname: '',
            result: "",
            isClicked: false
        }
        this.onclickCalculate = this.onclickCalculate.bind(this);
        this.setFname = this.setFname.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.getData = this.getData.bind(this)
    }

    setFname(e) {
        this.setState({
            fname: e.text
        })
    }

    setLastName(e) {
        this.setState({
            sname: e.text
        })
    }

    onclickCalculate() {
        this.setState({
            love: !this.state.love,
            fname: "",
            sname: "",
            isClicked: false
        })
    }

    getData() {
        if (this.state.fname === "" || this.state.sname === "") {
            alert("Please Fill Blank Field")
        } else {
            if (this.state.isClicked)
                return false
            this.setState({
                isClicked: true
            })
            const url = `https://lovemeter-mobileapp.herokuapp.com/?fname=Slugfy(` + this.state.fname + `, { replacement: ' ', remove: null, lower: true })&sname=Slugfy(` + this.state.sname + `, { replacement: ' ', remove: null, lower: true })}`;
            this.setState({ loading: true });
            let fetchData = {
                method: 'GET',
                headers: new Headers({ "X-Mashape-Key": "FqqjZlBKJZmshMl7Q1dvg2laDXGKp1HggZQjsnev2Jr3yZrFJG", "Contant-type": "application/json" })
            }
            fetch(url, fetchData)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        error: res.error || null,
                        loading: false,
                        complete: true,
                        result: res.body,
                        calculate: parseInt(res.body.percentage)
                    }, () => {
                        if(res.statusCode === 200)
                        this.onclickCalculate()
                        else{
                            this.setState({
                                isClicked:false
                            })
                        }
                    });
                })
                .catch(error => {
                    this.setState({ error })
                });
        }
    }

    render() {
        return (<ImageBackground source={backimage} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTexr}>LWC</Text>
            </View>
            {this.state.love ? <Calculate onclickCalculate={this.onclickCalculate} result={this.state.result}></Calculate> :
                <React.Fragment>
                    <View style={styles.inputfield}>
                        <TextInput style={styles.input} placeholder="Male Name" onChangeText={this.setFname}></TextInput>
                    </View>
                    <View style={[styles.inputfield, styles.marginTop]}>
                        <TextInput style={styles.input} placeholder="Female Name" onChangeText={this.setLastName}></TextInput>
                    </View>
                    <View style={[styles.button, styles.marginTop]}>
                        <Text style={styles.buttonStyle} onPress={() => { this.getData() }}>Life of couple</Text>
                    </View>
                </React.Fragment>}
            <View style={styles.footer}>
                <Text style={styles.headerTexr}>Do Not Misuse Feelings </Text>
            </View>
        </ImageBackground >)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: "center",
        flexDirection: 'column',
        // justifyContent: 'center',

    },
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#040A07',
        opacity: 0.6,
        alignItems: "center",
        borderBottomWidth: 3,
        borderColor: "#64f5ed"
    },
    headerTexr: {
        top: 50,
        color: "#bedcda",
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputfield: {
        top: 100,
        width: '100%',
        height: '10%',
        borderColor: "white",
        paddingTop: 10,
        paddingLeft: 40

    },
    input: {
        backgroundColor: "#040A07",
        width: '90%',
        height: 60,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomWidth: 6,
        opacity: .5,
        borderColor: "white",
        fontSize: 20,
        paddingLeft: 10,
        color: "#64f5ed"
    },
    marginTop: {
        marginTop: 26
    },
    button: {
        top: 120,
        backgroundColor: "red",
        width: "80%",
        height: 60,
        backgroundColor: "#040A07",
        opacity: 0.5,
        borderWidth: 2,
        borderColor: "#BDD8D6",
        borderRadius: 20,
        alignItems: "center",
        paddingTop: 10
    },
    buttonStyle: {
        color: "#BDD8D6",
        fontSize: 25
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: 100,
        backgroundColor: '#040A07',
        opacity: 0.6,
        alignItems: "center",
        borderTopWidth: 3,
        borderColor: "#64f5ed"
    },

})