import { StyleSheet } from 'react-native';

module.exports.styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 18
  },
  owned: {
    color: 'green'
  },
  missing: {
    color: 'red'
  },
  signUpText: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#ff0000',
  },
  warningText: {
    color: '#ff0000'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    // backgroundColor: 'white'
  },
  recipeImage: {
    width: 312,
    height: 231,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center'
  }
});