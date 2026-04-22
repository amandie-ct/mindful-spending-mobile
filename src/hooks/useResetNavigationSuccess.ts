import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/Routes';

export function useResetNavigationSuccess() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function reset(params: RootStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        { name: 'LoginScreen' },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }
  return { reset };
}
