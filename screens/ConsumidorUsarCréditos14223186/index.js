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
      <View style={styles.View_111_6}>
        <Text style={styles.Text_111_6}>Usar créditos</Text>
      </View>
      <View style={styles.View_111_7} />
      <View style={styles.View_111_9}>
        <View style={styles.View_I111_9_33_227}>
          <View style={styles.View_I111_9_33_227_31_265} />
        </View>
        <View style={styles.View_I111_9_33_324}>
          <Text style={styles.Text_I111_9_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I111_9_33_212}
        />
      </View>
      <View style={styles.View_111_10}>
        <View style={styles.View_I111_10_33_150}>
          <View style={styles.View_I111_10_33_150_31_265} />
        </View>
        <View style={styles.View_I111_10_33_321}>
          <Text style={styles.Text_I111_10_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I111_10_33_180}
        />
      </View>
      <View style={styles.View_111_19}>
        <View style={styles.View_111_20}>
          <Text style={styles.Text_111_20}>Saldo</Text>
        </View>
        <View style={styles.View_111_21}>
          <Text style={styles.Text_111_21}>R$ 267,00</Text>
        </View>
      </View>
      <View style={styles.View_182_2}>
        <View style={styles.View_119_4} />
        <View style={styles.View_119_5}>
          <Text style={styles.Text_119_5}>Pagar Serviço/Produto</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a43e/0c75/59425725bf16400b880bca87cbc56d3c"
          }}
          style={styles.ImageBackground_119_10}
        />
      </View>
      <View style={styles.View_182_0}>
        <View style={styles.View_119_12} />
        <View style={styles.View_119_13}>
          <Text style={styles.Text_119_13}>Procurar Serviço/Produto</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c007/d5bc/096ff5c0b48660ee37ae545c994246be"
          }}
          style={styles.ImageBackground_121_1}
        />
      </View>
      <View style={styles.View_182_8}>
        <View style={styles.View_119_8} />
        <View style={styles.View_119_9}>
          <Text style={styles.Text_119_9}>Pagar Taxas/Multas</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9db0/b784/20275b3992ca48fbf9895a26e7a74edc"
          }}
          style={styles.ImageBackground_121_18}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/815c/dc21/dd874578daca5fa8ac24ef3eb632acca"
        }}
        style={styles.ImageBackground_132_7}
      />
      <View style={styles.View_182_7}>
        <View style={styles.View_182_4} />
        <View style={styles.View_182_5}>
          <Text style={styles.Text_182_5}>Doar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7a6/1f0d/a9ebf49f0beae0b7e427e187f7d54df2"
          }}
          style={styles.ImageBackground_174_38}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_111_6: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%"),
    top: hp("19.6875%")
  },
  Text_111_6: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_7: {
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
  View_111_9: {
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
  View_I111_9_33_227: {
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
  View_I111_9_33_227_31_265: {
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
  View_I111_9_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I111_9_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I111_9_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_111_10: {
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
  View_I111_10_33_150: {
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
  View_I111_10_33_150_31_265: {
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
  View_I111_10_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I111_10_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I111_10_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_111_19: {
    width: wp("51.388888888888886%"),
    minWidth: wp("51.388888888888886%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: hp("27.65625%")
  },
  View_111_20: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_111_20: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_21: {
    width: wp("30.555555555555557%"),
    minWidth: wp("30.555555555555557%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.833333333333332%"),
    top: hp("0%")
  },
  Text_111_21: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: hp("37.65625%")
  },
  View_119_4: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 108, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_119_5: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.500000000000004%"),
    top: hp("1.40625%")
  },
  Text_119_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_119_10: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666664%"),
    top: hp("2.34375%")
  },
  View_182_0: {
    width: wp("58.88888888888889%"),
    minWidth: wp("58.88888888888889%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: hp("77.5%")
  },
  View_119_12: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 108, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_119_13: {
    width: wp("41.94444444444444%"),
    minWidth: wp("41.94444444444444%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.94444444444444%"),
    top: hp("1.5625%")
  },
  Text_119_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_121_1: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666664%")
  },
  View_182_8: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: hp("50.9375%")
  },
  View_119_8: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 108, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_119_9: {
    width: wp("32.77777777777778%"),
    minWidth: wp("32.77777777777778%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.94444444444444%"),
    top: hp("1.40625%")
  },
  Text_119_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_121_18: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("3.90625%"),
    minHeight: hp("3.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222218%"),
    top: hp("2.500000000000007%")
  },
  ImageBackground_132_7: {
    width: wp("83.33285013834636%"),
    minWidth: wp("83.33285013834636%"),
    height: hp("0.16052987426519394%"),
    minHeight: hp("0.16052987426519394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("24.8394775390625%")
  },
  View_182_7: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: hp("64.21875%")
  },
  View_182_4: {
    width: wp("49.72222222222222%"),
    minWidth: wp("49.72222222222222%"),
    height: hp("8.90625%"),
    minHeight: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 108, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_182_5: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    minHeight: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.94444444444444%"),
    top: hp("2.96875%")
  },
  Text_182_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_174_38: {
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    top: hp("2.96875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777779%")
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
