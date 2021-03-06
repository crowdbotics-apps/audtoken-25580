import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_182_27}>
        <Text style={styles.Text_182_27}>Avisos</Text>
      </View>
      <View style={styles.View_182_31} />
      <View style={styles.View_182_36}>
        <View style={styles.View_I182_36_33_227}>
          <View style={styles.View_I182_36_33_227_31_265} />
        </View>
        <View style={styles.View_I182_36_33_324}>
          <Text style={styles.Text_I182_36_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I182_36_33_212}
        />
      </View>
      <View style={styles.View_182_38}>
        <View style={styles.View_182_39} />
        <View style={styles.View_182_40}>
          <Text style={styles.Text_182_40}>
            Parabéns ! Ganhou Créditos Fiscais !
          </Text>
        </View>
        <View style={styles.View_182_41}>
          <Text style={styles.Text_182_41}>
            Você ganhou R$ 4,80 no Salão da Sara 15/02/21 15:30
          </Text>
        </View>
      </View>
      <View style={styles.View_210_0}>
        <View style={styles.View_210_1} />
        <View style={styles.View_210_2}>
          <Text style={styles.Text_210_2}>
            Que bom que utilizou seus créditos !
          </Text>
        </View>
        <View style={styles.View_210_3}>
          <Text style={styles.Text_210_3}>
            Você utilizou R$ 23,20 em créditos no Corpo e CIA 18/02/21 17:10
          </Text>
        </View>
      </View>
      <View style={styles.View_182_19}>
        <View style={styles.View_182_12} />
        <View style={styles.View_182_13}>
          <Text style={styles.Text_182_13}>
            Seja bem-vindo ao Crédito Fiscal !!
          </Text>
        </View>
        <View style={styles.View_182_18}>
          <Text style={styles.Text_182_18}>
            Informe seu CPF na Nota Fiscal dos serviços que adquirir e ganhe
            créditos para utilizar em outros serviços. 10/02/21 10:35
          </Text>
        </View>
      </View>
      <View style={styles.View_208_2024}>
        <View style={styles.View_I208_2024_33_150}>
          <View style={styles.View_I208_2024_33_150_31_265} />
        </View>
        <View style={styles.View_I208_2024_33_321}>
          <Text style={styles.Text_I208_2024_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I208_2024_33_180}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_182_27: {
    width: wp("20.27777777777778%"),
    minWidth: wp("20.27777777777778%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("19.6875%")
  },
  Text_182_27: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_31: {
    width: wp("100.55555555555556%"),
    minWidth: wp("100.55555555555556%"),
    height: hp("5.625%"),
    minHeight: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94.375%"),
    backgroundColor: "rgba(211, 238, 255, 1)"
  },
  View_182_36: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.94444444444444%"),
    top: hp("90.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_36_33_227: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_36_33_227_31_265: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_I182_36_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I182_36_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I182_36_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_182_38: {
    width: wp("83.88888888888889%"),
    minWidth: wp("83.88888888888889%"),
    height: hp("14.0625%"),
    minHeight: hp("14.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("42.1875%")
  },
  View_182_39: {
    width: wp("83.88888888888889%"),
    minWidth: wp("83.88888888888889%"),
    height: hp("14.0625%"),
    minHeight: hp("14.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(211, 238, 255, 1)",
    borderColor: "rgba(0, 108, 181, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_182_40: {
    width: wp("64.44444444444444%"),
    minWidth: wp("64.44444444444444%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222223%"),
    top: hp("1.09375%")
  },
  Text_182_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_182_41: {
    width: wp("78.61111111111111%"),
    minWidth: wp("78.61111111111111%"),
    minHeight: hp("7.656250000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: hp("5%")
  },
  Text_182_41: {
    color: "rgba(129, 130, 131, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_210_0: {
    width: wp("83.88888888888889%"),
    minWidth: wp("83.88888888888889%"),
    height: hp("14.0625%"),
    minHeight: hp("14.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("26.5625%")
  },
  View_210_1: {
    width: wp("83.88888888888889%"),
    minWidth: wp("83.88888888888889%"),
    height: hp("14.0625%"),
    minHeight: hp("14.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(211, 238, 255, 1)",
    borderColor: "rgba(0, 108, 181, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_210_2: {
    width: wp("63.888888888888886%"),
    minWidth: wp("63.888888888888886%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1.09375%")
  },
  Text_210_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_210_3: {
    width: wp("78.61111111111111%"),
    minWidth: wp("78.61111111111111%"),
    minHeight: hp("7.656250000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: hp("5%")
  },
  Text_210_3: {
    color: "rgba(129, 130, 131, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_182_19: {
    width: wp("83.88888888888889%"),
    minWidth: wp("83.88888888888889%"),
    height: hp("16.5625%"),
    minHeight: hp("16.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("57.8125%")
  },
  View_182_12: {
    width: wp("83.88888888888889%"),
    minWidth: wp("83.88888888888889%"),
    height: hp("16.5625%"),
    minHeight: hp("16.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(211, 238, 255, 1)",
    borderColor: "rgba(0, 108, 181, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_182_13: {
    width: wp("61.111111111111114%"),
    minWidth: wp("61.111111111111114%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.388888888888891%"),
    top: hp("1.093750000000007%")
  },
  Text_182_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_182_18: {
    width: wp("78.61111111111111%"),
    minWidth: wp("78.61111111111111%"),
    minHeight: hp("10.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: hp("5.000000000000007%")
  },
  Text_182_18: {
    color: "rgba(129, 130, 131, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_208_2024: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("90.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_2024_33_150: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I208_2024_33_150_31_265: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_I208_2024_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I208_2024_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I208_2024_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_2: { height: 640 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
