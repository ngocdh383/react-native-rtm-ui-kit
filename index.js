import { NativeModules } from "react-native";
import RTMButton from './src/components/Button'
import RTMCheckBox from './src/components/CheckBox'
import RTMHeader from './src/components/Header'
import RTMRating from './src/components/Rating'
import RTMText from './src/components/Text'
import RTMNormalTextInput from './src/components/TextInput/NormalTextInput'
import RTMUnderLineTextInput from './src/components/TextInput/UnderLineTextInput'

const { RtmUiKit } = NativeModules;
export {
    RTMButton,
    RTMCheckBox,
    RTMHeader,
    RTMRating,
    RTMText,
    RTMNormalTextInput,
    RTMUnderLineTextInput
}
