import { View, ScrollView, SafeAreaView, KeyboardAvoidingView, StyleSheet, useColorScheme } from 'react-native';
import DButton from '../components/DButton';
import DInputText from '../components/DInputText';
import { Formik } from 'formik';

const LoginScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
   
    // const validateUsername = (username: any) => {
    //     const regex = /^[a-zA-Z0-9_]{4,15}$/;
    //     return (regex.test(username) ?? "Please enter valid Username");
    //   };

    // const validatePassword = (password: any) => {
    //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //     return (regex.test(password) ?? "Please enter valid password");
    // };

    // const validate = (values: any, props: any /* only available when using withFormik */) => {
    //     const errors = {
    //         username: "",
    //         password: "",
    //     };
      
    //     if (!values.username) {
    //       errors.username = 'Required';
    //     } else if (!/^[a-zA-Z0-9_]{4,15}$/i.test(values.email)) {
    //       errors.username = 'Invalid username address';
    //     }
        
    //     if(!values.password) {
    //         errors.password = "Required";
    //     }
      
    //     return errors;
    //   };
    return (
        <SafeAreaView style={styles.container}>
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

                }}
                >{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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

                    <DButton title='Login' onPress={handleSubmit} />
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
})

export default LoginScreen;