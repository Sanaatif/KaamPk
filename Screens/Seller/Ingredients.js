
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CreateGigObject from "../../Controller/CreateGigController";
let CreateGigController = new CreateGigObject();
export default class SignUp extends React.Component {

  constructor() {
    super()
    this.IngredientsPrice = []
    this.IngredientsName = []
    this.price = ''
    this.name = ''
  }
  render() {

    return (
      <View style={{ backgroundColor: '#232526', height: '100%' }}>
        <StatusBar backgroundColor='#232526' barStyle="light-content" />


        <View style={{ width: RFValue(40), height: RFValue(40), justifyContent: 'flex-start' }}>

        </View>

        <View style={{

          zIndex: RFValue(15),
          width: RFValue(330), height: RFValue(500), marginTop: RFValue(120),
          backgroundColor: '#232526', elevation: RFValue(5), borderWidth: RFValue(5), borderColor: '#232526',
          alignSelf: "center",
          borderBottomLeftRadius: RFValue(300)
        }}>
          <LinearGradient
            colors={['#deb459', '#80662C']}
            style={{ width: RFValue(100), margin: RFValue(5), height: RFValue(30), marginLeft: RFValue(-5), borderTopRightRadius: RFValue(20), borderBottomRightRadius: RFValue(20) }}>
            <Text style={{
              fontSize: RFValue(16), marginLeft: RFValue(10), marginTop: RFValue(2), marginBottom: RFValue(15),
              fontWeight: 'bold', color: 'black'
            }}>Add Extras</Text>
          </LinearGradient>
          <View style={{ flexDirection: 'row' }}>

            <View>
              <Text style={{
                fontSize: RFValue(16), marginLeft: RFValue(15), margin: RFValue(5), marginTop: RFValue(15),
                fontWeight: 'bold', color: '#deb459'
              }}>Price</Text>

              <View style={{
                paddingLeft: RFValue(15), backgroundColor: '#232526', margin: RFValue(10), width: RFValue(70),
                flexDirection: 'row',

                height: RFValue(30), alignSelf: "center", borderTopColor: '#232526', color: '#deb459',
                borderRightColor: '#232526', borderBottomColor: '#deb459', borderLeftColor: '#deb459',
                borderWidth: 2, borderBottomLeftRadius: RFValue(30)
              }}>

                <TextInput
                  keyboardType='number-pad'
                  placeholderTextColor='#80662C'
                  placeholder='10.0'
                  ref={input => { this.textInput1 = input }}
                  onChangeText={(e) => {

                    this.price = e



                  }}

                  style={{
                    height: RFValue(40), marginLeft: RFValue(0), marginTop: RFValue(-10),
                    fontSize: RFValue(16), color: '#deb459'
                  }}>


                </TextInput>
              </View>
            </View>
            <Text style={{
              fontSize: RFValue(12), marginLeft: RFValue(0), margin: RFValue(0), marginTop: RFValue(53),
              fontWeight: '100', color: '#deb459'
            }}>Rupees</Text>
            <View>
              <Text style={{
                fontSize: RFValue(16), marginLeft: RFValue(15), margin: RFValue(5), marginTop: RFValue(15),
                fontWeight: 'bold', color: '#deb459'
              }}>Name</Text>

              <View style={{
                paddingLeft: RFValue(15), backgroundColor: '#232526', margin: RFValue(10), width: RFValue(100),
                flexDirection: 'row',

                height: RFValue(30), alignSelf: "center", borderTopColor: '#232526', color: '#deb459',
                borderRightColor: '#232526', borderBottomColor: '#deb459', borderLeftColor: '#deb459',
                borderWidth: 2, borderBottomLeftRadius: RFValue(30)
              }}>

                <TextInput
                  placeholderTextColor='#80662C'
                  placeholder='Ingredient'
                  ref={input => { this.textInput2 = input }}
                  onChangeText={(e) => {

                    this.name = e



                  }}

                  style={{
                    height: RFValue(40), marginLeft: RFValue(0), marginTop: RFValue(-10),
                    fontSize: RFValue(16), color: '#deb459'
                  }}>


                </TextInput>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {

                this.IngredientsName.push(this.name)
                this.IngredientsPrice.push(this.price)
                this.textInput1.clear()
                this.textInput2.clear()
                this.forceUpdate()

              }}
              style={{
                alignSelf: "center", marginTop: RFValue(40), marginLeft: RFValue(0), borderColor: '#deb459', backgroundColor: '#232526',
                borderWidth: RFValue(0), borderBottomLeftRadius: RFValue(30), height: RFValue(50), justifyContent: "center"
              }}
            >
              <LinearGradient
                colors={['#deb459', '#80662C']}
                style={{
                  borderColor: '#deb459', backgroundColor: '#232526',
                  borderWidth: RFValue(0), width: RFValue(70), borderBottomLeftRadius: RFValue(30), height: RFValue(30), justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: RFValue(12), alignSelf: "center", fontWeight: 'bold', color: 'white' }}>Add</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            multiline={true}
            numberOfLines={4}
            style={{
              paddingLeft: RFValue(15), overflow: 'hidden', backgroundColor: '#232526', margin: RFValue(10), width: RFValue(250),


              height: RFValue(200), alignSelf: "center", borderTopColor: '#232526', color: '#deb459',
              borderRightColor: '#232526', borderBottomColor: '#deb459', borderLeftColor: '#deb459',
              borderWidth: 2, borderBottomLeftRadius: RFValue(30)
            }}>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{
                fontSize: RFValue(16),
                fontWeight: 'bold', color: '#deb459'
              }}>Name</Text>
              <Text style={{
                fontSize: RFValue(16),
                fontWeight: 'bold', color: '#deb459'
              }}>Price</Text>

            </View>
            {this.IngredientsName != null ? this.IngredientsName.map((currElement, index) =>
              <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                  fontSize: RFValue(16),
                  fontWeight: '100', color: '#deb459'
                }}>{currElement}</Text>
                <Text style={{
                  fontSize: RFValue(16),
                  fontWeight: '100', color: '#deb459'
                }}>{this.IngredientsPrice[index]} Rs</Text>

              </View>
            ) : null}

          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.route.params.Object.setIngredientsName(this.IngredientsName)
              this.props.route.params.Object.setIngredientsPrice(this.IngredientsPrice)
              this.props.navigation.navigate('GigCreation4', { Object: this.props.route.params.Object })
            }}

            style={{
              alignSelf: "center", margin: RFValue(10), marginLeft: RFValue(60), borderColor: '#deb459', backgroundColor: '#232526',
              borderWidth: RFValue(2), width: RFValue(200), borderBottomLeftRadius: RFValue(30), height: RFValue(50), justifyContent: "center"
            }}


          >

            <Text style={{ fontSize: RFValue(16), alignSelf: "center", fontWeight: 'bold', color: '#deb459' }}>Next</Text>

          </TouchableOpacity>


        </View>
        <View style={{ flex: 15, flexDirection: "row", marginTop: RFValue(-300) }}>
          <LinearGradient start={{ x: -0.5, y: 0 }}
            colors={['#deb459', '#deb459', '#232526']} style={{
              borderTopLeftRadius: RFValue(100), backgroundColor: '#d12115', flex: 15
            }}></LinearGradient>

        </View>


      </View>


    );
  }
};

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flex: 100
  }
  , TouchableOpacity:
    { flexDirection: "row", justifyContent: "space-evenly", elevation: 1, borderColor: 'white' },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: RFValue("1"),
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: RFValue("1"),
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : RFValue("-1.5"),
    paddingLeft: RFValue("3"),
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: RFValue("7"),
  },
  signIn: {
    width: RFValue("95%"),
    height: RFValue("8"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },

  previewImage: {
    width: '100%',
    height: '100%'
  }
});


