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
      <View style={styles.View_73_105}>
        <Text style={styles.Text_73_105}>
          Último resumo enviado: 07 dias atrás
        </Text>
      </View>
      <View style={styles.View_410_64}>
        <Text style={styles.Text_410_64}>
          Tokens registrados no Contribuinte: 03
        </Text>
      </View>
      <View style={styles.View_410_130}>
        <Text style={styles.Text_410_130}>
          Endereço do contribuinte: DIFERE DO ATUAL
        </Text>
      </View>
      <View style={styles.View_409_0}>
        <Text style={styles.Text_409_0}>
          Documentos emitidos últimos 30 dias: 189
        </Text>
      </View>
      <View style={styles.View_73_106} />
      <View style={styles.View_73_108}>
        <View style={styles.View_I73_108_33_227}>
          <View style={styles.View_I73_108_33_227_31_265} />
        </View>
        <View style={styles.View_I73_108_33_324}>
          <Text style={styles.Text_I73_108_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I73_108_33_212}
        />
      </View>
      <View style={styles.View_73_109}>
        <View style={styles.View_I73_109_33_150}>
          <View style={styles.View_I73_109_33_150_31_265} />
        </View>
        <View style={styles.View_I73_109_33_321}>
          <Text style={styles.Text_I73_109_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I73_109_33_180}
        />
      </View>
      <View style={styles.View_404_283}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I404_283_8_1}
        />
        <View style={styles.View_I404_283_26_68}>
          <Text style={styles.Text_I404_283_26_68}>Auditor Token Fiscal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I404_283_22_0}
        />
        <View style={styles.View_I404_283_106_0}>
          <Text style={styles.Text_I404_283_106_0}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I404_283_301_2401}
        />
      </View>
      <View style={styles.View_404_290}>
        <View style={styles.View_I404_290_408_8} />
        <View style={styles.View_I404_290_408_9}>
          <Text style={styles.Text_I404_290_408_9}>
            Serviços de Beleza LTDA ME 12.345.678/0001-22
          </Text>
        </View>
        <View style={styles.View_I404_290_408_59}>
          <Text style={styles.Text_I404_290_408_59}>
            Token 0001001-02 R$ 83.745,00 - 271 NFS-e
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ac/4f97/9d076b3daf21cf1f1771e134ebd65e8d"
          }}
          style={styles.ImageBackground_I404_290_408_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4df3/b81a/b3deaa7b5e4056ed2dd277190e8a6e9e"
          }}
          style={styles.ImageBackground_I404_290_408_44}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/536d/c7e0/0b926c0ce1fdc6c145a6e0e106c89c9a"
        }}
        style={styles.ImageBackground_410_60}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/536d/c7e0/0b926c0ce1fdc6c145a6e0e106c89c9a"
        }}
        style={styles.ImageBackground_410_62}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/536d/c7e0/0b926c0ce1fdc6c145a6e0e106c89c9a"
        }}
        style={styles.ImageBackground_410_65}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/536d/c7e0/0b926c0ce1fdc6c145a6e0e106c89c9a"
        }}
        style={styles.ImageBackground_410_131}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_73_105: {
    width: wp("65.27777777777779%"),
    minWidth: wp("65.27777777777779%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("34.21875%")
  },
  Text_73_105: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_410_64: {
    width: wp("68.05555555555556%"),
    minWidth: wp("68.05555555555556%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("39.84375%")
  },
  Text_410_64: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_410_130: {
    width: wp("78.05555555555556%"),
    minWidth: wp("78.05555555555556%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("45.46875%")
  },
  Text_410_130: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_0: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("28.59375%")
  },
  Text_409_0: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_73_106: {
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
  View_73_108: {
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
  View_I73_108_33_227: {
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
  View_I73_108_33_227_31_265: {
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
  View_I73_108_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I73_108_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I73_108_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_73_109: {
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
  View_I73_109_33_150: {
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
  View_I73_109_33_150_31_265: {
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
  View_I73_109_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I73_109_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I73_109_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_404_283: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.812499999999998%"),
    minHeight: hp("12.812499999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I404_283_8_1: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4375000000000004%"),
    resizeMode: "cover"
  },
  View_I404_283_26_68: {
    flexGrow: 1,
    width: wp("61.38888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("5.9375%")
  },
  Text_I404_283_26_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.04320000171661377,
    textTransform: "none"
  },
  ImageBackground_I404_283_22_0: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I404_283_106_0: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I404_283_106_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I404_283_301_2401: {
    flexGrow: 1,
    width: wp("12.357652452256945%"),
    height: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.61111111111111%"),
    top: hp("4.0625%"),
    resizeMode: "cover"
  },
  View_404_290: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.5625%"),
    minHeight: hp("11.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.812499999999998%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I404_290_408_8: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_I404_290_408_9: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%"),
    top: hp("1.0937500000000018%")
  },
  Text_I404_290_408_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I404_290_408_59: {
    flexGrow: 1,
    width: wp("80.55555555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%"),
    top: hp("7.812500000000002%")
  },
  Text_I404_290_408_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I404_290_408_11: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("2.0312500000000018%")
  },
  ImageBackground_I404_290_408_44: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2.8125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("7.500000000000002%")
  },
  ImageBackground_410_60: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.125%"),
    minHeight: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%"),
    top: hp("28.90625%")
  },
  ImageBackground_410_62: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.125%"),
    minHeight: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%"),
    top: hp("34.53125%")
  },
  ImageBackground_410_65: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.125%"),
    minHeight: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%"),
    top: hp("40.15625%")
  },
  ImageBackground_410_131: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.125%"),
    minHeight: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%"),
    top: hp("45.78125%")
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
