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
      <View style={styles.View_61_59}>
        <View style={styles.View_61_30} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_61_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_61_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb7/3666/7d0f729412fc9e27e1e9fa704ca83d86"
          }}
          style={styles.ImageBackground_61_33}
        />
        <View style={styles.View_61_34}>
          <View style={styles.View_61_35}>
            <Text style={styles.Text_61_35}>Perfil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a17/73f8/14a1cf554fe4f8c8aa3028585bf324dc"
            }}
            style={styles.ImageBackground_61_36}
          />
        </View>
        <View style={styles.View_61_37}>
          <View style={styles.View_61_38}>
            <Text style={styles.Text_61_38}>Configurações</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d2e/34cf/bbb26586446d002d22e2cff985ea7b77"
            }}
            style={styles.ImageBackground_61_39}
          />
        </View>
        <View style={styles.View_61_41}>
          <Text style={styles.Text_61_41}>Sair</Text>
        </View>
        <View style={styles.View_61_43}>
          <View style={styles.View_61_44}>
            <Text style={styles.Text_61_44}>Doar</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/775e/49fc/7dda6f3d2ebd5b1e3ab1f830764fa8b3"
            }}
            style={styles.ImageBackground_61_45}
          />
        </View>
        <View style={styles.View_61_46}>
          <View style={styles.View_61_47}>
            <Text style={styles.Text_61_47}>Usar créditos</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cde4/e08f/bd9f926581346540f8478fc6f4d838fb"
            }}
            style={styles.ImageBackground_61_48}
          />
        </View>
        <View style={styles.View_61_49}>
          <View style={styles.View_61_50}>
            <Text style={styles.Text_61_50}>Extrato</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6450/414b/076d1fa473ebde1ae9b0e90bd5d1789a"
            }}
            style={styles.ImageBackground_61_51}
          />
        </View>
        <View style={styles.View_61_52}>
          <View style={styles.View_61_53}>
            <Text style={styles.Text_61_53}>Denunciar</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec3c/c5a9/1eda5e3ab53157b6422a93a7b6a2075b"
            }}
            style={styles.ImageBackground_61_54}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ece9/17fe/c6a7673e00a454f2a264b07d632baf2f"
          }}
          style={styles.ImageBackground_61_58}
        />
      </View>
      <View style={styles.View_77_82}>
        <View style={styles.View_77_80} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6a2/939a/115f932943fdc614d0174f412e597b6c"
          }}
          style={styles.ImageBackground_77_79}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/536d/c7e0/0b926c0ce1fdc6c145a6e0e106c89c9a"
        }}
        style={styles.ImageBackground_77_69}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4e8/fdd2/ca5412aadf808c6bfb05c4e847edc087"
        }}
        style={styles.ImageBackground_410_59}
      />
      <View style={styles.View_77_74}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70b9/52d9/cbabc2378242e77c13dbb3d3f0077813"
          }}
          style={styles.ImageBackground_77_71}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8743/c765/06489794037a7c008fc7f763bb04766f"
        }}
        style={styles.ImageBackground_77_65}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282b/0802/b7c6197fe406d6fdb885621652074922"
        }}
        style={styles.ImageBackground_80_69}
      />
      <View style={styles.View_25_17}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_8_1}
        />
        <View style={styles.View_26_68}>
          <Text style={styles.Text_26_68}>Auditor Token Fiscal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_22_0}
        />
        <View style={styles.View_106_0}>
          <Text style={styles.Text_106_0}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_301_2401}
        />
      </View>
      <View style={styles.View_33_390}>
        <View style={styles.View_33_150}>
          <View style={styles.View_I33_150_31_265} />
        </View>
        <View style={styles.View_33_321}>
          <Text style={styles.Text_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_33_180}
        />
      </View>
      <View style={styles.View_33_348}>
        <View style={styles.View_33_245}>
          <View style={styles.View_I33_245_31_265} />
        </View>
        <View style={styles.View_33_323}>
          <Text style={styles.Text_33_323}>Usar créditos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce53/e503/aedbdc13d264be7fdce476e36e11b8b0"
          }}
          style={styles.ImageBackground_33_222}
        />
      </View>
      <View style={styles.View_58_6}>
        <View style={styles.View_58_3}>
          <Text style={styles.Text_58_3}>Token Fiscal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/328b/32c2/6dd55aaf689323524568a45a847569a4"
          }}
          style={styles.ImageBackground_58_4}
        />
      </View>
      <View style={styles.View_33_383}>
        <View style={styles.View_31_299}>
          <View style={styles.View_I31_299_31_265} />
        </View>
        <View style={styles.View_33_273}>
          <Text style={styles.Text_33_273}>Sobre</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
          }}
          style={styles.ImageBackground_31_318}
        />
      </View>
      <View style={styles.View_77_83}>
        <View style={styles.View_77_17}>
          <Text style={styles.Text_77_17}>Salvar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4521/78da/736e65811d0075f13ffacc59fda6a0f2"
          }}
          style={styles.ImageBackground_77_18}
        />
      </View>
      <View style={styles.View_33_362}>
        <View style={styles.View_33_227}>
          <View style={styles.View_I33_227_31_265} />
        </View>
        <View style={styles.View_33_324}>
          <Text style={styles.Text_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_33_212}
        />
      </View>
      <View style={styles.View_33_411}>
        <View style={styles.View_33_181}>
          <View style={styles.View_I33_181_31_265} />
        </View>
        <View style={styles.View_33_328}>
          <Text style={styles.Text_33_328}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11e4/2c26/a69707547be8f10ae036d98765a6be65"
          }}
          style={styles.ImageBackground_33_290}
        />
      </View>
      <View style={styles.View_33_369}>
        <View style={styles.View_33_254}>
          <View style={styles.View_I33_254_31_265} />
        </View>
        <View style={styles.View_33_325}>
          <Text style={styles.Text_33_325}>Receber Crédito</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/305c/fe24/d1d9608a64534fc9be5ce3b855f0f1bf"
          }}
          style={styles.ImageBackground_33_226}
        />
      </View>
      <View style={styles.View_77_47}>
        <View style={styles.View_77_44}>
          <Text style={styles.Text_77_44}>Pesquisar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992c/e392/224ebda0b14d90d35c34a64d80befdbb"
          }}
          style={styles.ImageBackground_77_46}
        />
      </View>
      <View style={styles.View_39_408}>
        <View style={styles.View_39_222}>
          <Text style={styles.Text_39_222}>Perfil</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f76/b86c/c6dcabcacc2dc1e0e60e229bafcb9b54"
          }}
          style={styles.ImageBackground_39_32}
        />
      </View>
      <View style={styles.View_44_42}>
        <View style={styles.View_44_30}>
          <Text style={styles.Text_44_30}>Participar Créd Fiscal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1e7/ee25/9e857766b106c41d8595b781afe1757f"
          }}
          style={styles.ImageBackground_44_31}
        />
      </View>
      <View style={styles.View_174_37}>
        <View style={styles.View_174_32}>
          <Text style={styles.Text_174_32}>Avisos</Text>
        </View>
        <View style={styles.View_174_33}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d0/7c55/d4c5651d1192857311b3055e89692b47"
            }}
            style={styles.ImageBackground_174_34}
          />
          <View style={styles.View_174_35}>
            <Text style={styles.Text_174_35}>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_183_119}>
        <View style={styles.View_183_115}>
          <Text style={styles.Text_183_115}>Avisos</Text>
        </View>
        <View style={styles.View_183_116}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6556/f1ce/54879ed6ab97b274613cf2921bd4a79e"
            }}
            style={styles.ImageBackground_183_117}
          />
          <View style={styles.View_183_118}>
            <Text style={styles.Text_183_118}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_174_36}>
        <View style={styles.View_174_28}>
          <Text style={styles.Text_174_28}>Avisos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0172/c44d/b11a0f24cca0d68b020c7aaa0f4f28bd"
          }}
          style={styles.ImageBackground_174_29}
        />
      </View>
      <View style={styles.View_49_195}>
        <View style={styles.View_49_175}>
          <View style={styles.View_I49_175_31_265} />
        </View>
        <View style={styles.View_49_176}>
          <Text style={styles.Text_49_176}>Ler NF</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/385d/fdc1/cfd65e61314af487cf4e71007632b3bb"
          }}
          style={styles.ImageBackground_49_194}
        />
      </View>
      <View style={styles.View_33_404}>
        <View style={styles.View_33_168}>
          <View style={styles.View_I33_168_31_265} />
        </View>
        <View style={styles.View_33_327}>
          <Text style={styles.Text_33_327}>Início</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b648/1752/c5adcec41b92a1d86e51127f929df176"
          }}
          style={styles.ImageBackground_33_194}
        />
      </View>
      <View style={styles.View_77_78}>
        <View style={styles.View_77_41}>
          <Text style={styles.Text_77_41}>Incluir</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b5e/7fa4/165f4e89bdcf534d23e0b4a43a8f2979"
          }}
          style={styles.ImageBackground_77_42}
        />
      </View>
      <View style={styles.View_75_306}>
        <View style={styles.View_75_29}>
          <Text style={styles.Text_75_29}>Gestão Créditos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f828/730c/2f8ec666ae858f45356b7aa3dca3cc28"
          }}
          style={styles.ImageBackground_75_30}
        />
      </View>
      <View style={styles.View_73_76}>
        <View style={styles.View_73_48}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1716/7e73/d258871d5c0fc778f366eb4a59912b39"
            }}
            style={styles.ImageBackground_73_49}
          />
        </View>
        <View style={styles.View_73_32}>
          <Text style={styles.Text_73_32}>Extrato Recebtos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7321/5a95/0612f8452f5ff39f7ec3e82bb4c7f38e"
          }}
          style={styles.ImageBackground_73_33}
        />
      </View>
      <View style={styles.View_39_564}>
        <View style={styles.View_39_547}>
          <Text style={styles.Text_39_547}>Extrato</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf7f/8f6a/bf1fcb31a2c354a5bf5bf5aa30783974"
          }}
          style={styles.ImageBackground_39_548}
        />
      </View>
      <View style={styles.View_77_77}>
        <View style={styles.View_77_39}>
          <Text style={styles.Text_77_39}>Excluir</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd9c/4fa7/e02e8deb190d27ff295e2474664c4e98"
          }}
          style={styles.ImageBackground_77_75}
        />
      </View>
      <View style={styles.View_43_491}>
        <View style={styles.View_43_489}>
          <Text style={styles.Text_43_489}>Emitir NF</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c0d/c4ed/0a744d0f58928857386fba4df2a5e244"
          }}
          style={styles.ImageBackground_43_490}
        />
      </View>
      <View style={styles.View_33_397}>
        <View style={styles.View_33_159}>
          <View style={styles.View_I33_159_31_265} />
        </View>
        <View style={styles.View_33_334}>
          <Text style={styles.Text_33_334}>Doar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7a6/1f0d/a9ebf49f0beae0b7e427e187f7d54df2"
          }}
          style={styles.ImageBackground_33_347}
        />
      </View>
      <View style={styles.View_42_471}>
        <View style={styles.View_42_465}>
          <Text style={styles.Text_42_465}>Denunciar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98f8/fe27/4e3d3a48627bab1b300fb4fd79c36a44"
          }}
          style={styles.ImageBackground_42_466}
        />
      </View>
      <View style={styles.View_75_31}>
        <View style={styles.View_75_27}>
          <Text style={styles.Text_75_27}>Créditos Recebidos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0365/4a60/9b056056190e810b530fcd4949bc8ef0"
          }}
          style={styles.ImageBackground_75_28}
        />
      </View>
      <View style={styles.View_33_376}>
        <View style={styles.View_33_236}>
          <View style={styles.View_I33_236_31_265} />
        </View>
        <View style={styles.View_33_326}>
          <Text style={styles.Text_33_326}>Config</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5986/f579/e1f9e3cbd075dca4c8e4abdfc3706e27"
          }}
          style={styles.ImageBackground_33_216}
        />
      </View>
      <View style={styles.View_33_355}>
        <View style={styles.View_33_195}>
          <View style={styles.View_I33_195_31_265} />
        </View>
        <View style={styles.View_33_322}>
          <Text style={styles.Text_33_322}>Avançar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f05e/7c83/5f3429ae63731b628c368d03de13c66e"
          }}
          style={styles.ImageBackground_33_208}
        />
      </View>
      <View style={styles.View_77_52}>
        <View style={styles.View_77_43}>
          <Text style={styles.Text_77_43}>Alterar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7d7/a804/e66bdf2c3cbd1abb0827b8eb385565c6"
          }}
          style={styles.ImageBackground_77_45}
        />
      </View>
      <View style={styles.View_33_96}>
        <View style={styles.View_26_79}>
          <Text style={styles.Text_26_79}>avançar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f8/d62d/06b675d658c57057821740cec9995a8d"
          }}
          style={styles.ImageBackground_33_92}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
        }}
        style={styles.ImageBackground_103_1296}
      />
      <View style={styles.View_39_407}>
        <Text style={styles.Text_39_407}>Xxxxx</Text>
      </View>
      <View style={styles.View_174_30}>
        <Text style={styles.Text_174_30}>Xxxxx</Text>
      </View>
      <View style={styles.View_39_217} />
      <View style={styles.View_174_31} />
      <View style={styles.View_19_5}>
        <Text style={styles.Text_19_5}>PREFEITURA SÃO JOSÉ DOS CAMPOS</Text>
      </View>
      <View style={styles.View_402_8}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d48/b529/3a9a7157bb5f0a82e115b8e23242e039"
          }}
          style={styles.ImageBackground_402_6}
        />
        <View style={styles.View_402_7}>
          <Text style={styles.Text_402_7}>PREFEITURA SÃO JOSÉ DOS CAMPOS</Text>
        </View>
      </View>
      <View style={styles.View_404_282}>
        <View style={styles.View_408_8} />
        <View style={styles.View_408_9}>
          <Text style={styles.Text_408_9}>
            Serviços de Beleza LTDA ME 12.345.678/0001-22
          </Text>
        </View>
        <View style={styles.View_408_59}>
          <Text style={styles.Text_408_59}>Token 0001001-02</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ac/4f97/9d076b3daf21cf1f1771e134ebd65e8d"
          }}
          style={styles.ImageBackground_408_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4df3/b81a/b3deaa7b5e4056ed2dd277190e8a6e9e"
          }}
          style={styles.ImageBackground_408_44}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_61_59: {
    width: wp("10.72%"),
    minWidth: wp("10.72%"),
    height: hp("38.34296724470135%"),
    minHeight: hp("38.34296724470135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.599999999999994%"),
    top: hp("53.179190751445084%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_61_30: {
    flexGrow: 1,
    width: wp("10.72%"),
    height: hp("38.34296724470135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_61_31: {
    flexGrow: 1,
    width: wp("9.430942993164063%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6400000000000077%"),
    top: hp("32.18390845149927%")
  },
  ImageBackground_61_32: {
    flexGrow: 1,
    width: wp("9.430942993164063%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6400000000000077%"),
    top: hp("21.85664241254215%")
  },
  ImageBackground_61_33: {
    flexGrow: 1,
    width: wp("9.430942993164063%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6400000000000077%"),
    top: hp("15.881241814938583%")
  },
  View_61_34: {
    flexGrow: 1,
    width: wp("9.36%"),
    height: hp("2.8901734104046244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7199999999999989%"),
    top: hp("27.745664739884397%")
  },
  View_61_35: {
    width: wp("7.4399999999999995%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9200000000000017%")
  },
  Text_61_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_36: {
    width: wp("0.96%"),
    height: hp("2.697495183044316%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_37: {
    flexGrow: 1,
    width: wp("9.36%"),
    height: hp("2.8901734104046244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7199999999999989%"),
    top: hp("23.506743737957613%")
  },
  View_61_38: {
    width: wp("7.4399999999999995%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9200000000000017%")
  },
  Text_61_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_39: {
    width: wp("1.04%"),
    height: hp("2.5048169556840074%"),
    top: hp("0.38535645472062185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_41: {
    flexGrow: 1,
    width: wp("7.4399999999999995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6400000000000006%"),
    top: hp("33.91136801541426%")
  },
  Text_61_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_43: {
    flexGrow: 1,
    width: wp("9.44%"),
    height: hp("2.8901734104046244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6400000000000077%"),
    top: hp("10.982658959537567%")
  },
  View_61_44: {
    width: wp("7.4399999999999995%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.999999999999993%")
  },
  Text_61_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_45: {
    width: wp("1.2%"),
    height: hp("2.8901734104046244%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_46: {
    flexGrow: 1,
    width: wp("9.6%"),
    height: hp("3.0828516377649327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.480000000000004%"),
    top: hp("2.3121387283236956%")
  },
  View_61_47: {
    width: wp("7.4399999999999995%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1599999999999966%")
  },
  Text_61_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_48: {
    width: wp("1.28%"),
    height: hp("3.0828516377649327%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_49: {
    flexGrow: 1,
    width: wp("9.36%"),
    height: hp("2.8901734104046244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7199999999999989%"),
    top: hp("6.743737957610797%")
  },
  View_61_50: {
    width: wp("7.4399999999999995%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9200000000000017%")
  },
  Text_61_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_51: {
    width: wp("0.96%"),
    height: hp("1.5414258188824663%"),
    top: hp("0.5780346820809186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_52: {
    flexGrow: 1,
    width: wp("9.36%"),
    height: hp("3.0828516377649327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7199999999999989%"),
    top: hp("17.14836223506743%")
  },
  View_61_53: {
    width: wp("7.4399999999999995%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9200000000000017%")
  },
  Text_61_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_54: {
    width: wp("1.1199999999999999%"),
    height: hp("2.3121385445714226%"),
    top: hp("0.19267822736031803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_61_58: {
    flexGrow: 1,
    width: wp("0.96%"),
    height: hp("2.5048169556840074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7199999999999989%"),
    top: hp("33.91136801541426%")
  },
  View_77_82: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    minHeight: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.72%"),
    top: hp("88.6319845857418%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_80: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  ImageBackground_77_79: {
    flexGrow: 1,
    width: wp("0.64%"),
    height: hp("1.541425727006328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5280004882812506%"),
    top: hp("1.117531366660657%")
  },
  ImageBackground_77_69: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    minHeight: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.560000000000002%"),
    top: hp("88.6319845857418%")
  },
  ImageBackground_410_59: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    minHeight: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.560000000000002%"),
    top: hp("94.41233140655106%")
  },
  View_77_74: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    minHeight: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.759999999999998%"),
    top: hp("88.6319845857418%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_77_71: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_77_65: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    minHeight: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.36%"),
    top: hp("88.6319845857418%")
  },
  ImageBackground_80_69: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    minHeight: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.08%"),
    top: hp("88.6319845857418%")
  },
  View_25_17: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    height: hp("15.79961464354528%"),
    minHeight: hp("15.79961464354528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.56%"),
    top: hp("2.312138728323699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_1: {
    flexGrow: 1,
    width: wp("28.799999999999997%"),
    height: hp("11.560693641618498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.238921001926783%"),
    resizeMode: "cover"
  },
  View_26_68: {
    flexGrow: 1,
    width: wp("17.68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3200000000000003%"),
    top: hp("7.321772639691716%")
  },
  Text_26_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.04320000171661377,
    textTransform: "none"
  },
  ImageBackground_22_0: {
    flexGrow: 1,
    width: wp("28.799999999999997%"),
    height: hp("4.238921001926782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_106_0: {
    flexGrow: 1,
    width: wp("8.08%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.400000000000006%"),
    top: hp("12.524084778420038%")
  },
  Text_106_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_301_2401: {
    flexGrow: 1,
    width: wp("3.55900390625%"),
    height: hp("6.74373795761079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.64%"),
    top: hp("5.009633911368016%"),
    resizeMode: "cover"
  },
  View_33_390: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.16%"),
    top: hp("59.15221579961464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_150: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_150_31_265: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_321: {
    flexGrow: 1,
    width: wp("2.64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3200000000000003%"),
    top: hp("8.09248554913296%")
  },
  Text_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_180: {
    flexGrow: 1,
    width: wp("1.68%"),
    height: hp("3.0828516377649327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6399999999999988%"),
    top: hp("2.5048169556840065%")
  },
  View_33_348: {
    width: wp("4.4799999999999995%"),
    minWidth: wp("4.4799999999999995%"),
    height: hp("14.836223506743737%"),
    minHeight: hp("14.836223506743737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.52%"),
    top: hp("4.624277456647398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_245: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9.633911368015415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.240000000000002%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_245_31_265: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9.633911368015415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_323: {
    flexGrow: 1,
    width: wp("3.52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5599999999999987%"),
    top: hp("10.019267822736031%")
  },
  Text_33_323: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_222: {
    flexGrow: 1,
    width: wp("2.08%"),
    height: hp("4.238921001926782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.120000000000001%"),
    top: hp("2.6974951830443166%")
  },
  View_58_6: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("13.48747591522158%"),
    minHeight: hp("13.48747591522158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("42.19653179190752%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_58_3: {
    flexGrow: 1,
    width: wp("2.64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23999999999999488%"),
    top: hp("8.092485549132945%")
  },
  Text_58_3: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_58_4: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_33_383: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.96%"),
    top: hp("59.15221579961464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_299: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_299_31_265: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_273: {
    flexGrow: 1,
    width: wp("2.56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3200000000000003%"),
    top: hp("8.09248554913296%")
  },
  Text_33_273: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_31_318: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000003%"),
    top: hp("1.926782273603088%")
  },
  View_77_83: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("74.95183044315993%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_17: {
    flexGrow: 1,
    width: wp("2.7199999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23999999999999488%"),
    top: hp("8.092485549132931%")
  },
  Text_77_17: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_77_18: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_33_362: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.36%"),
    top: hp("42.19653179190752%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_227: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_227_31_265: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_324: {
    flexGrow: 1,
    width: wp("1.76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7200000000000006%"),
    top: hp("8.092485549132945%")
  },
  Text_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_212: {
    flexGrow: 1,
    width: wp("1.44%"),
    height: hp("3.8541275641821713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8800000000000008%"),
    top: hp("1.9267822736030809%")
  },
  View_33_411: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.36%"),
    top: hp("59.15221579961464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_181: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_181_31_265: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_328: {
    flexGrow: 1,
    width: wp("1.76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7200000000000006%"),
    top: hp("8.09248554913296%")
  },
  Text_33_328: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_290: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("1.926782273603088%")
  },
  View_33_369: {
    width: wp("4.64%"),
    minWidth: wp("4.64%"),
    height: hp("15.414258188824661%"),
    minHeight: hp("15.414258188824661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.04%"),
    top: hp("4.624277456647398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_254: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9.633911368015415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3093334960937497%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_254_31_265: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9.633911368015415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_325: {
    flexGrow: 1,
    width: wp("4.64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.211946050096339%")
  },
  Text_33_325: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_226: {
    flexGrow: 1,
    width: wp("1.28%"),
    height: hp("4.624277456647398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6799999999999997%"),
    top: hp("2.6974951830443166%")
  },
  View_77_47: {
    width: wp("3.44%"),
    minWidth: wp("3.44%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.200000000000001%"),
    top: hp("74.95183044315993%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_44: {
    flexGrow: 1,
    width: wp("4.3999999999999995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4800000000000004%"),
    top: hp("8.092485549132931%")
  },
  Text_77_44: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_77_46: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15999999999999837%"),
    top: hp("0%")
  },
  View_39_408: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.96%"),
    top: hp("59.15221579961464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_222: {
    flexGrow: 1,
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.40000000000000213%"),
    top: hp("8.09248554913296%")
  },
  Text_39_222: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_39_32: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_42: {
    width: wp("4.32%"),
    minWidth: wp("4.32%"),
    height: hp("13.48747591522158%"),
    minHeight: hp("13.48747591522158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.32%"),
    top: hp("5.202312138728324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_30: {
    flexGrow: 1,
    width: wp("4.88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2400000000000002%"),
    top: hp("8.092485549132947%")
  },
  Text_44_30: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_44_31: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5599999999999996%"),
    top: hp("0%")
  },
  View_174_37: {
    width: wp("5.04%"),
    minWidth: wp("5.04%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.28%"),
    top: hp("26.97495183044316%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_174_32: {
    flexGrow: 1,
    width: wp("2.96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.04%"),
    top: hp("8.092485549132945%")
  },
  Text_174_32: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_174_33: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.96%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  ImageBackground_174_34: {
    width: wp("1.92%"),
    minWidth: wp("1.92%"),
    height: hp("4.624277456647398%"),
    minHeight: hp("4.624277456647398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6400000000000006%"),
    top: hp("1.541425818882466%")
  },
  View_174_35: {
    width: wp("0.5599999999999999%"),
    minWidth: wp("0.5599999999999999%"),
    minHeight: hp("2.697495183044316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2800000000000011%"),
    top: hp("2.50481695568401%")
  },
  Text_174_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_183_119: {
    width: wp("5.04%"),
    minWidth: wp("5.04%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.72%"),
    top: hp("26.97495183044316%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_183_115: {
    flexGrow: 1,
    width: wp("2.96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0399999999999991%"),
    top: hp("8.092485549132945%")
  },
  Text_183_115: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_183_116: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9599999999999991%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  ImageBackground_183_117: {
    width: wp("1.92%"),
    minWidth: wp("1.92%"),
    height: hp("4.624277456647398%"),
    minHeight: hp("4.624277456647398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6400000000000006%"),
    top: hp("1.541425818882466%")
  },
  View_183_118: {
    width: wp("0.5599999999999999%"),
    minWidth: wp("0.5599999999999999%"),
    minHeight: hp("2.697495183044316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3600000000000012%"),
    top: hp("2.50481695568401%")
  },
  Text_183_118: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_174_36: {
    width: wp("5.04%"),
    minWidth: wp("5.04%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("26.97495183044316%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_174_28: {
    flexGrow: 1,
    width: wp("2.96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.04%"),
    top: hp("8.092485549132945%")
  },
  Text_174_28: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_174_29: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.96%"),
    top: hp("0%")
  },
  View_49_195: {
    width: wp("4.64%"),
    minWidth: wp("4.64%"),
    height: hp("12.909441233140656%"),
    minHeight: hp("12.909441233140656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.4%"),
    top: hp("4.624277456647398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_49_175: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9.633911368015415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3093334960937497%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I49_175_31_265: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9.633911368015415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_49_176: {
    flexGrow: 1,
    width: wp("4.64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.211946050096339%")
  },
  Text_49_176: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_49_194: {
    flexGrow: 1,
    width: wp("1.92%"),
    height: hp("4.624277456647398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3599999999999994%"),
    top: hp("2.5048169556840083%")
  },
  View_33_404: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.56%"),
    top: hp("59.15221579961464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_168: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_168_31_265: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_327: {
    flexGrow: 1,
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.40000000000000213%"),
    top: hp("8.09248554913296%")
  },
  Text_33_327: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_194: {
    flexGrow: 1,
    width: wp("1.44%"),
    height: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.879999999999999%"),
    top: hp("1.734104046242777%")
  },
  View_77_78: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.76%"),
    top: hp("74.95183044315993%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_41: {
    flexGrow: 1,
    width: wp("2.8000000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1599999999999966%"),
    top: hp("8.092485549132931%")
  },
  Text_77_41: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_77_42: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_75_306: {
    width: wp("3.6799999999999997%"),
    minWidth: wp("3.6799999999999997%"),
    height: hp("13.48747591522158%"),
    minHeight: hp("13.48747591522158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.64%"),
    top: hp("42.19653179190752%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_75_29: {
    flexGrow: 1,
    width: wp("3.6799999999999997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.092485549132945%")
  },
  Text_75_29: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_75_30: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31999999999999984%"),
    top: hp("0%")
  },
  View_73_76: {
    width: wp("4.64%"),
    minWidth: wp("4.64%"),
    height: hp("15.606936416184972%"),
    minHeight: hp("15.606936416184972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.239999999999995%"),
    top: hp("4.624277456647398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_73_48: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9.633911368015415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3093334960937568%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_73_49: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9.633911368015415%"),
    minHeight: hp("9.633911368015415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_73_32: {
    flexGrow: 1,
    width: wp("5.92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6399999999999935%"),
    top: hp("10.211946050096339%")
  },
  Text_73_32: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_73_33: {
    flexGrow: 1,
    width: wp("0.96%"),
    height: hp("3.4682080924855487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2000000000000028%"),
    top: hp("2.312138728323699%")
  },
  View_39_564: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.76%"),
    top: hp("59.15221579961464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_547: {
    flexGrow: 1,
    width: wp("3.1199999999999997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.09248554913296%")
  },
  Text_39_547: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_39_548: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_77_77: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.96%"),
    top: hp("74.95183044315993%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_39: {
    flexGrow: 1,
    width: wp("2.96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0799999999999983%"),
    top: hp("8.092485549132931%")
  },
  Text_77_39: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_77_75: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_43_491: {
    width: wp("4.08%"),
    minWidth: wp("4.08%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.52%"),
    top: hp("5.202312138728324%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_43_489: {
    flexGrow: 1,
    width: wp("4.08%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.092485549132947%")
  },
  Text_43_489: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_43_490: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48%"),
    top: hp("0%")
  },
  View_33_397: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.56%"),
    top: hp("42.19653179190752%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_159: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_159_31_265: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_334: {
    flexGrow: 1,
    width: wp("2.08%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5600000000000023%"),
    top: hp("8.092485549132945%")
  },
  Text_33_334: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_347: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("1.9267822736030809%")
  },
  View_42_471: {
    width: wp("4.3999999999999995%"),
    minWidth: wp("4.3999999999999995%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6%"),
    top: hp("74.95183044315993%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_42_465: {
    flexGrow: 1,
    width: wp("4.3999999999999995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.092485549132931%")
  },
  Text_42_465: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_42_466: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6400000000000006%"),
    top: hp("0%")
  },
  View_75_31: {
    width: wp("3.6799999999999997%"),
    minWidth: wp("3.6799999999999997%"),
    height: hp("13.48747591522158%"),
    minHeight: hp("13.48747591522158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("59.15221579961464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_75_27: {
    flexGrow: 1,
    width: wp("4.5600000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3999999999999986%"),
    top: hp("8.09248554913296%")
  },
  Text_75_27: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_75_28: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23999999999999488%"),
    top: hp("0%")
  },
  View_33_376: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.76%"),
    top: hp("42.19653179190752%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_236: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_236_31_265: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_326: {
    flexGrow: 1,
    width: wp("2.88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1599999999999966%"),
    top: hp("8.092485549132945%")
  },
  Text_33_326: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_216: {
    flexGrow: 1,
    width: wp("1.76%"),
    height: hp("4.238921001926782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7199999999999989%"),
    top: hp("1.73410404624277%")
  },
  View_33_355: {
    width: wp("3.5999999999999996%"),
    minWidth: wp("3.5999999999999996%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("42.19653179190752%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_195: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16000000000000014%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_195_31_265: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_33_322: {
    flexGrow: 1,
    width: wp("3.5999999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.092485549132945%")
  },
  Text_33_322: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_33_208: {
    flexGrow: 1,
    width: wp("1.68%"),
    height: hp("3.0828516377649327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9599999999999991%"),
    top: hp("2.3121387283236956%")
  },
  View_77_52: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("10.789980732177264%"),
    minHeight: hp("10.789980732177264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.56%"),
    top: hp("74.95183044315993%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_77_43: {
    flexGrow: 1,
    width: wp("2.96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08000000000000185%"),
    top: hp("8.092485549132931%")
  },
  Text_77_43: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_77_45: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_33_96: {
    width: wp("6.800000000000001%"),
    minWidth: wp("6.800000000000001%"),
    height: hp("5.5876685934489405%"),
    minHeight: hp("5.5876685934489405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.72%"),
    top: hp("75.72254335260115%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_79: {
    flexGrow: 1,
    width: wp("4.936986999511719%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6984585741811173%")
  },
  Text_26_79: {
    color: "rgba(0, 108, 181, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_33_92: {
    flexGrow: 1,
    width: wp("1.76%"),
    height: hp("4.431599229287091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5600000000000005%"),
    top: hp("0.7707129094412295%")
  },
  ImageBackground_103_1296: {
    width: wp("3.55900390625%"),
    minWidth: wp("3.55900390625%"),
    height: hp("6.74373795761079%"),
    minHeight: hp("6.74373795761079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.08%"),
    top: hp("5.780346820809249%"),
    resizeMode: "cover"
  },
  View_39_407: {
    width: wp("2.64%"),
    minWidth: wp("2.64%"),
    minHeight: hp("2.697495183044316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.360000000000003%"),
    top: hp("50.28901734104046%")
  },
  Text_39_407: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_174_30: {
    width: wp("2.64%"),
    minWidth: wp("2.64%"),
    minHeight: hp("2.697495183044316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("35.067437379576106%")
  },
  Text_174_30: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_39_217: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    minHeight: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.96%"),
    top: hp("42.19653179190752%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_174_31: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("7.7071290944123305%"),
    minHeight: hp("7.7071290944123305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("26.97495183044316%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_19_5: {
    width: wp("9.075458984375%"),
    minWidth: wp("9.075458984375%"),
    minHeight: hp("4.238921001926782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.36%"),
    top: hp("13.102119460500964%")
  },
  Text_19_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.016200000643730166,
    textTransform: "none"
  },
  View_402_8: {
    width: wp("9.075458984375%"),
    minWidth: wp("9.075458984375%"),
    height: hp("14.450867052023122%"),
    minHeight: hp("14.450867052023122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.28%"),
    top: hp("42.96724470134875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_402_6: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("9.05587668593449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1599999999999966%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_402_7: {
    flexGrow: 1,
    width: wp("10.24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5600000000000023%"),
    top: hp("10.211946050096337%")
  },
  Text_402_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.019800000786781312,
    textTransform: "none"
  },
  View_404_282: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    height: hp("14.258188824662813%"),
    minHeight: hp("14.258188824662813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.56%"),
    top: hp("21.772639691714836%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_408_8: {
    flexGrow: 1,
    width: wp("28.799999999999997%"),
    height: hp("14.258188824662813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_408_9: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1200000000000045%"),
    top: hp("1.3487475915221587%")
  },
  Text_408_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_59: {
    flexGrow: 1,
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1200000000000045%"),
    top: hp("9.633911368015411%")
  },
  Text_408_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_11: {
    flexGrow: 1,
    width: wp("1.6%"),
    height: hp("3.8535645472061653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.79999999999999%"),
    top: hp("2.5048169556840065%")
  },
  ImageBackground_408_44: {
    flexGrow: 1,
    width: wp("1.44%"),
    height: hp("3.4682080924855487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.79999999999999%"),
    top: hp("9.248554913294797%")
  },
  View_2: { height: 519 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
