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
      <View style={styles.View_253_2}>
        <Text style={styles.Text_253_2}>Doar créditos</Text>
      </View>
      <View style={styles.View_253_3} />
      <View style={styles.View_253_5}>
        <View style={styles.View_I253_5_33_227}>
          <View style={styles.View_I253_5_33_227_31_265} />
        </View>
        <View style={styles.View_I253_5_33_324}>
          <Text style={styles.Text_I253_5_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I253_5_33_212}
        />
      </View>
      <View style={styles.View_253_6}>
        <View style={styles.View_I253_6_33_150}>
          <View style={styles.View_I253_6_33_150_31_265} />
        </View>
        <View style={styles.View_I253_6_33_321}>
          <Text style={styles.Text_I253_6_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I253_6_33_180}
        />
      </View>
      <View style={styles.View_253_11}>
        <View style={styles.View_253_12}>
          <Text style={styles.Text_253_12}>Saldo atual</Text>
        </View>
        <View style={styles.View_253_13}>
          <Text style={styles.Text_253_13}>R$ 267,00</Text>
        </View>
      </View>
      <View style={styles.View_253_14}>
        <View style={styles.View_253_15} />
        <View style={styles.View_253_16}>
          <Text style={styles.Text_253_16}>GAC</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e74/696f/f41db971fd337ee4310732d9e6b6a27d"
          }}
          style={styles.ImageBackground_253_17}
        />
      </View>
      <View style={styles.View_253_32}>
        <View style={styles.View_253_33}>
          <Text style={styles.Text_253_33}>Valor a doar</Text>
        </View>
        <View style={styles.View_253_34} />
        <View style={styles.View_253_35}>
          <Text style={styles.Text_253_35}>50,00</Text>
        </View>
      </View>
      <View style={styles.View_253_36}>
        <View style={styles.View_253_37}>
          <Text style={styles.Text_253_37}>Saldo</Text>
        </View>
        <View style={styles.View_253_38}>
          <Text style={styles.Text_253_38}>R$ 217,00</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/189c/ae71/24eb5944740b4c0f6842357db621cfdd"
        }}
        style={styles.ImageBackground_253_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1339/b9a0/afe97dd3c136572f5dab492672a4f284"
        }}
        style={styles.ImageBackground_253_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a157/eed3/214f0827ef88ebe9b7abd130f5ea1a87"
        }}
        style={styles.ImageBackground_253_75}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_253_2: {
    width: wp("40.27777777777778%"),
    minWidth: wp("40.27777777777778%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("19.6875%")
  },
  Text_253_2: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_253_3: {
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
  View_253_5: {
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
  View_I253_5_33_227: {
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
  View_I253_5_33_227_31_265: {
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
  View_I253_5_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I253_5_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I253_5_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_253_6: {
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
  View_I253_6_33_150: {
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
  View_I253_6_33_150_31_265: {
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
  View_I253_6_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I253_6_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I253_6_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_253_11: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("27.500000000000004%")
  },
  View_253_12: {
    width: wp("25.27777777777778%"),
    minWidth: wp("25.27777777777778%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_253_12: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_253_13: {
    width: wp("23.055555555555557%"),
    minWidth: wp("23.055555555555557%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("0%")
  },
  Text_253_13: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_253_14: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%"),
    top: hp("48.75%")
  },
  View_253_15: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_253_16: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("1.09375%")
  },
  Text_253_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_253_17: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.562500000000007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.00000000000001%")
  },
  View_253_32: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("4.0625%"),
    minHeight: hp("4.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444443%"),
    top: hp("31.874999999999996%")
  },
  View_253_33: {
    width: wp("27.22222222222222%"),
    minWidth: wp("27.22222222222222%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.15625000000000355%")
  },
  Text_253_33: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_253_34: {
    width: wp("33.611111111111114%"),
    minWidth: wp("33.611111111111114%"),
    height: hp("4.0625%"),
    minHeight: hp("4.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(51, 98, 130, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_253_35: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.44444444444444%"),
    top: hp("0.15625000000000355%")
  },
  Text_253_35: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_253_36: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.888888888888886%"),
    top: hp("38.125%")
  },
  View_253_37: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_253_37: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_253_38: {
    width: wp("23.055555555555557%"),
    minWidth: wp("23.055555555555557%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.44444444444445%"),
    top: hp("0%")
  },
  Text_253_38: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_253_39: {
    width: wp("29.444444444444446%"),
    minWidth: wp("29.444444444444446%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%"),
    top: hp("37.5%")
  },
  ImageBackground_253_40: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333062065972221%"),
    top: hp("25%")
  },
  ImageBackground_253_75: {
    width: wp("36.11111111111111%"),
    minWidth: wp("36.11111111111111%"),
    height: hp("20.3125%"),
    minHeight: hp("20.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.22222222222222%"),
    top: hp("60.78125%"),
    resizeMode: "cover"
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
