import React from 'react';
import axios from 'axios';

import { Text, View, TextInput, Button } from 'react-native';
import { styles } from '../../styles';

import IP from '../../IP';

//====================================================
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      wrongEmailOrPass: false,
    }
    this.submitLogin = this.submitLogin.bind(this);
  }
  //====================================================
  submitLogin() {
    if (this.state.email.length) {
      axios.post(`http://${IP}/api/login`, {
        email: this.state.email,
        password: this.state.password,
      }).then(results => {
        if (results.data === 'Wrong email or password') {
          this.setState({
            wrongEmailOrPass: true,
          });
        } else {
          let { email, name } = results.data;
          this.props.screenProps.logIn(email, name);
        }
      }).catch(error => {
        console.log('Error in validating user login:', error);
      });
    }
  }
  //====================================================
  render() {
    return (
      <View style={[styles.container, { backgroundColor: 'white', justifyContent: 'center' }]}>
        <Text>Log in to your CookBook account:</Text>
        <TextInput
          style={{ height: 40, width: 250 }}
          placeholder='Email'
          onChangeText={text => this.setState({
            email: text,
            wrongEmailOrPass: false,
          })}
        />
        {this.state.wrongEmailOrPass
          ? <Text style={styles.warningText}>Wrong email or password.</Text>
          : (null)}
        <TextInput
          style={{ height: 40, width: 250 }}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={text => this.setState({
            password: text,
            wrongEmailOrPass: false,
          })}
        />
        <Button
          title='Log In'
          onPress={() => {
            this.submitLogin();
          }}
        />
        <Text style={styles.signUpText}>
          Don't have an account?
        </Text>
        <Button
          title="Sign Up"
          onPress={() => {
            this.props.screenProps.switchToSignUp();
          }}
          color='#ff0000'
          style={styles.signUpButton}
        />
      </View>
    )
  }
}

export default Login;