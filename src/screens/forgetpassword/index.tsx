import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Image,
  Linking,
  Alert,
  ActivityIndicator
} from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logoSmall from "../../assets/app-name-small.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import linha from "../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from 'react-native-gesture-handler';

import { useNavigation, useFocusEffect } from "@react-navigation/native";

export function ForgetPassword() {
  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    //navigation.navigate('CheckMail');
    //navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Image
        source={logoSmall}
        style={styles.imageLogo}
        resizeMode="stretch"
      />

      <View style={styles.content}>

        <Text style={styles.title}>
          Esqueceu a senha?{'\n'}
        </Text>

        <Text style={styles.content}>
          Digite seu e-mail abaixo para receber as
          instruções de redefinição de senha.{'\n'}
        </Text>

        <Text style={styles.label}>
          E-mail {'\n'}
        </Text>
        <TextInput style={styles.input} placeholder="Insira seu e-mail"
          keyboardType='email-address'
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        >
        </TextInput>
      </View>

      <View style={styles.controlsbutons}>
        <Button
          title="Recuperar senha" onPress={handleNavigate} />
      </View>
      <Image
        source={linha}
        style={styles.linha}
      />
    </View>

  );
}