import { Text, TextInput,View, ScrollView, SafeAreaView, KeyboardAvoidingView, StyleSheet, useColorScheme, Dimensions, StatusBar } from 'react-native';
import DButton from '../components/DButton';
import DInputText from '../components/DInputText';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors';
//import { createUser } from './user';
import auth from '@react-native-firebase/auth'

const Registration = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation();
     const colorScheme = useColorScheme();
    const { width: screenWidth } = Dimensions.get('window');
    let darkLightcolor = isDarkMode ? colors.white : colors.greenPrimary
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <KeyboardAvoidingView>
            <ScrollView>
                <Formik 
                initialValues={{fullname:'', email: '', password: ''}}
                validate={(values) => {
                    const errors = {
                        fullname: "",
                        email: "",
                        password: "",
                    }
                  
                    if (!values.email) {
                      errors.email = 'Required';
                    } 
                    
                    if(!values.password) {
                        errors.password = "Required";
                    }

                    if(!values.fullname) {
                        errors.fullname = "Required";
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
                        placeholderText='fullname' 
                        onChangeText={handleChange('fullname')}
                        onBlur={handleBlur('fullname')}
                        value={values.fullname}
                        title='fullname'
                        errorText={errors.fullname}
                        touched={touched.fullname}
                        />

                        <DInputText 
                        placeholderText='email' 
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        title='email'
                        errorText={errors.email}
                        touched={touched.email}
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
                  
                    <DButton title='Registration' onPress={async () => {
                        console.log("regisration button clicked")
                      //  await createUser(fullname, email, password);
                        try{
                            const user = await auth().createUserWithEmailAndPassword("dhruvika.ahuja@gmail.com", "Payal@123!");
                            await user.user.updateProfile("Dhruvika Ahuja");
                            console.log(user);
                            return user;
                        } catch(error) {
                            if(error.code === 'auth/email-already-in-use'){
                                console.log("The  email address is already in use")
                            } else if(error.code === 'auth/invaid-email') {
                                console.log('The email address is invalid');
                            }
                            console.log(error);
                        }
                        // Manually trigger form validation
                      //  const errors = await validateForm();
                        // if (errors.email?.length === 0 && errors.password?.length === 0 && errors.fullname?.length === 0) {
                        //     // No validation errors, proceed with submission
                        //    await createUser(fullname, email, password);
                        // } else {
                        //     console.log('Validation errors:', errors);
                        // }
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

export default Registration;