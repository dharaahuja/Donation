import auth from '@react-native-firebase/auth'

export const createUser = async(fullName, email, password) => {
    console.log('create user');
    try{
        const user = await auth().createUserWithEmailAndPassword(email, password);
        await user.user.updateProfile(fullName);
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
}