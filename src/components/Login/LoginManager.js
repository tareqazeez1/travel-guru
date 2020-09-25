import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


export const initializeLoginFramework = () => {
    if(firebase.apps.length ===0){
        firebase.initializeApp(firebaseConfig)
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {

            const { displayName, email } = res.user;

            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                success: true,
               

            }
            console.log(displayName, email);

            


            return signedInUser;

            
        })

        .catch(err => {
            console.log(err);
            console.log(err.message);
        })


}

export const handleSignOut =()=>{
    return firebase.auth().signOut()

        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: '',
                success: '',
                newUser: false
            }

            return signedOutUser;

        })

        .catch(err => {

        })
}

export const createUserWithEmailAndPassword=(name,email,password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email,password)

    .then(res => {
        console.log(res)
      const newUserInfo = res.user;
      newUserInfo.error = '';

      newUserInfo.success = true;
    //   setUser(newUserInfo)
     updateUserName(name);
     return newUserInfo;
    })
    .catch(error => {
      console.log(error);


      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;

      return newUserInfo;
      


    });
  }





  export const signInWithEmailAndPassword=(email,password)=>{
    return firebase.auth().signInWithEmailAndPassword(email,password)
 
     .then(res => {
       const newUserInfo =res.user;
       newUserInfo.error = '';
 
       newUserInfo.success = true;
       return newUserInfo;
       
       
     })
 
     .catch(error => {
 
       const newUserInfo = {};
       newUserInfo.error = error.message;
       newUserInfo.success = false;
       return newUserInfo;
     });
   }
 
   const updateUserName = name => {
 
     const user = firebase.auth().currentUser;
 
     user.updateProfile({
       displayName: name,
 
     }).then(function () {
       console.log('user name updated')
     }).catch(function (error) {
       console.log(error)
     });
 
   }