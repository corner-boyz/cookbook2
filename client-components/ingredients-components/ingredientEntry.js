import React from 'react';
import { View, Text, Modal } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { styles } from '../../styles.js'
//====================================================
class IngredientEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    };
  }
  //====================================================
  deleteIngredient() {
    this.props.item.quantity = 0;
    this.props.editIngredients();
    this.setState({
      showOptions: false
    })
  }
  //====================================================
  render() {
    // console.log(`Render IngredientEntry `, this.props);
    return (
      <View >
        <ListItem
          key={this.props.item.index}
          title={this.props.item.ingredient}
          subtitle={this.props.item.quantity + this.props.item.unit}
          onPress={() => {
            // console.log(this.props.item)
            this.setState({
              showOptions: true
            })
          }}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showOptions}
          onRequestClose={() => {
            this.setState({
              showOptions: false
            })
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text
              style={{ fontSize: 18 }}
            >Delete {this.props.item.ingredient} from pantry?
            </Text>
            <Button
              title='Delete'
              backgroundColor='red'
              rounded={true}
              onPress={() => {
                console.log('Firing');
                this.deleteIngredient();
              }}
            />
          </View>
        </Modal>
      </View>
    )
  }
}
export default IngredientEntry;