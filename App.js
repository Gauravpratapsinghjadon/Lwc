import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loader from './Component/Loader/Loader'
import Home from './src/Page/Home'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loader: false
      })
    } ,5000)
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.loader ?<Loader></Loader>:<Home></Home>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
