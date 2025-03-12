import { Text, TextInput,View, ScrollView, SafeAreaView, KeyboardAvoidingView, StyleSheet, useColorScheme, Dimensions, StatusBar } from 'react-native';
import DButton from '../components/DButton';
import DInputText from '../components/DInputText';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import colors from '../colors';

export type DonationStackParamList = {
    LoginScreen: undefined;
    ItemListScreen: undefined;
  };

type LoginScreenRouteProp = RouteProp<DonationStackParamList, 'LoginScreen'>

type LoginScreenNavigationProp = StackNavigationProp<DonationStackParamList, 'LoginScreen'>

type Props = {
    route: LoginScreenRouteProp;
    navigation: LoginScreenNavigationProp;
}
const LoginScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation<LoginScreenNavigationProp>();
     const colorScheme = useColorScheme();
    const { width: screenWidth } = Dimensions.get('window');
    let darkLightcolor = isDarkMode ? colors.white : colors.greenPrimary
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <KeyboardAvoidingView>
            <ScrollView>
                <Formik 
                initialValues={{username: '', password: ''}}
                validate={(values) => {
                    const errors = {
                        username: "",
                        password: "",
                    }
                  
                    if (!values.username) {
                      errors.username = 'Required';
                    } else if (!/^[a-zA-Z0-9_]{4,15}$/i.test(values.username)) {
                      errors.username = 'Invalid username address';
                    }
                    
                    if(!values.password) {
                        errors.password = "Required";
                    }
                    return errors;
                 }}
                onSubmit={() => {
                    console.log("OnSubmit called")
                    navigation.navigate("ItemListScreen")
                }}
                >{({ handleChange, handleBlur, handleSubmit, validateForm, values, errors, touched }) => (
                    <View>
                        <DInputText 
                        placeholderText='Username' 
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        title='Username'
                        errorText={errors.username}
                        touched={touched.username}
                        />
                        <DInputText 
                        placeholderText='Password' 
                        title='Password'
                        isSecure={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        errorText={errors.password}
                        touched={touched.password}
                        />
                  
                    <DButton title='Login' onPress={async () => {
                        // Manually trigger form validation
                        const errors = await validateForm();
                        if (errors.username?.length === 0 && errors.password?.length === 0) {
                            // No validation errors, proceed with submission
                            handleSubmit();
                            navigation.navigate("ItemListScreen")
                        } else {
                            console.log('Validation errors:', errors);
                        }
                    }} />
            </View>
                )}
                </Formik>
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
     title: {
            fontFamily:'sans-serif',
            fontSize: 14,
            fontWeight: 'condensed',
            margin: 2,
        },
        textInput: {
            fontFamily:'sans-serif',
            fontSize: 26,
            fontWeight: 'bold',
            padding: 10,
            borderBottomWidth: 2,
        },
        error: {
            fontFamily:'sans-serif',
            fontSize: 10,
            fontWeight: 'light',
            color: colors.red,
            marginBottom: 15,
        }
})

export default LoginScreen;


// import { View, ScrollView, SafeAreaView, KeyboardAvoidingView, StyleSheet, useColorScheme, StatusBar } from 'react-native';
// import DButton from '../components/DButton';
// import DInputText from '../components/DInputText';
// import { Formik } from 'formik';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RouteProp } from '@react-navigation/native';

// export type DonationStackParamList = {
//     LoginScreen: undefined;
//     ItemListScreen: undefined;
//   };

// type LoginScreenRouteProp = RouteProp<DonationStackParamList, 'LoginScreen'>

// type LoginScreenNavigationProp = StackNavigationProp<DonationStackParamList, 'LoginScreen'>

// type Props = {
//     route: LoginScreenRouteProp;
//     navigation: LoginScreenNavigationProp;
// }
// const LoginScreen = () => {
//     const isDarkMode = useColorScheme() === 'dark';
//     const navigation = useNavigation<LoginScreenNavigationProp>();
//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar barStyle="light-content" />
//             <KeyboardAvoidingView>
//             <ScrollView>
//                 <Formik 
//                 initialValues={{username: '', password: ''}}
//                 validate={(values) => {
//                     const errors = {
//                         username: "",
//                         password: "",
//                     }
                  
//                     if (!values.username) {
//                       errors.username = 'Required';
//                     } else if (!/^[a-zA-Z0-9_]{4,15}$/i.test(values.username)) {
//                       errors.username = 'Invalid username address';
//                     }
                    
//                     if(!values.password) {
//                         errors.password = "Required";
//                     }
//                     return errors;
//                  }}
//                 onSubmit={() => {
//                     console.log("OnSubmit called")
//                     navigation.navigate("ItemListScreen")
//                 }}
//                 >{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//                     <View>
//                     <DInputText 
//                     placeholderText='Username' 
//                     onChangeText={handleChange('username')}
//                     onBlur={handleBlur('username')}
//                     value={values.username}
//                     title='Username'
//                     errorText={errors.username}
//                     touched={touched.username}
//                     />

//                     <DInputText 
//                     placeholderText='Password' 
//                     title='Password'
//                     isSecure={true}
//                     onChangeText={handleChange('password')}
//                     onBlur={handleBlur('password')}
//                     value={values.password}
//                     errorText={errors.password}
//                     touched={touched.password}
//                     />

//                     <DButton title='Login' onPress={()=>{navigation.navigate("ItemListScreen")}} />
//                     </View>
//                 )}
//                 </Formik>
//             </ScrollView>
//             </KeyboardAvoidingView>
//         </SafeAreaView>
//     )
// }
// //()=>{navigation.navigate("ItemListScreen")}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// })

// export default LoginScreen;