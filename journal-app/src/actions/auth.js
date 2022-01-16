import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { startLoadingAction, finishLoadingAction, startLoading, finishLoading } from "./ui";

export const startLoginEmailPasswords = (email, password, name ) => {
  return (dispatch) => {
    dispatch(startLoadingAction());
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( ({ user }) =>{
      console.log(user)
      dispatch( login(user.uid, user.displayName) );
      dispatch(finishLoading());
      });
  };
};

export const startRegisterWithEmailPasswordName = ( email, password, name)=>{
  return ( dispatch )=>{
    firebase.auth().createUserWithEmailAndPassword( email, password )
    .then( async({ user })=>{  
      await user.updateProfile({ displayName: name });
      const { uid, displayName } = user;
      console.log(user)

      dispatch( login(uid, displayName) )
    })
    .catch( err =>{
      console.log(err)
    })
  }
}

export const startGoogleLogin = () => {
  return async(dispatch) => {
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    const { uid, displayName } = user;
    
    dispatch( login( uid, displayName) );
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
