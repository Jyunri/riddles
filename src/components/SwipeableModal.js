import React, { Fragment, Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Modal from "react-native-modal";

class SwipeableModal extends Component {
  constructor(props){
    super(props);
    console.log(props);
    state = {
      visible: props.visible,
    }
  }

  state = {
    visible: false
  }

  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render() {
    return (
      <Fragment>
        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.1}
          swipeDirection="left"
          onSwipe={this.closeModal}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.description}>
              {[
                "This is a swipeable modal from the 'react-native-modal' library.\n\n",
                "You can swipe it left to close it.\n\n",
                "You can also click on the backdrop to close the modal."
              ]}
            </Text>
            <TouchableOpacity onPress={this.closeModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity onPress={this.openModal}>
          <Text>Open me!</Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}

export default SwipeableModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    marginHorizontal: 40,
    marginVertical: 80
  },
  description: {
    padding: 20,
    fontSize: 18
  }
});