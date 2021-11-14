import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Form/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,updateProfile,getIdToken     } from "firebase/auth";


initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser] = useState({})
    const [isLoading,setIsLoadeing] = useState(true)
    const [admin,setAdmin]= useState(false)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const register = (email,password,location,history,name)=>{
        setIsLoadeing(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
          // setUser(result.user)
          const neUser = {email, displayName: name};
          saveUser(email,name,"POST")
          setUser(neUser)
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          const destination = location?.state?.from || '/';
          history.replace(destination)
        
        } )
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
          })
          .finally(()=>setIsLoadeing(false));
          
    }
    const loginWithEmail =(email,password,location,history)=>{
      setIsLoadeing(true)
      signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    setUser(result.user)
    const destination = location?.state?.from || '/';
    history.replace(destination)
  })
  .catch((error) => {
  })
  .finally(()=>setIsLoadeing(false))
    }



    const googleLogIn =(location,history)=>{
        setIsLoadeing(true)
        signInWithPopup(auth, provider)
        .then(result=>{
          const user = result.user;
          setUser(user)
          saveUser(user.email,user.displayName,"PUT")
          const destination = location?.state?.from || '/';
           history.replace(destination)
        })
        .catch((error) => {
        })
        .finally(()=>setIsLoadeing(false))

    };



    const saveUser = (email,displayName,method)=>{
        const users = {email,displayName}
        fetch('https://serene-escarpment-19540.herokuapp.com/users',{
          method:method,
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(users)
        })
        .then()
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              getIdToken(user)
              .then(idToken=>console.log(idToken))
            } else {
                setUser("")
            }
            setIsLoadeing(false)
          });
      },[])

      useEffect(()=>{
        fetch(`https://serene-escarpment-19540.herokuapp.com/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
      },[user?.email])



    const logOut = ()=>{
        setIsLoadeing(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoadeing(false))
          
    };

    return {
        user,
        isLoading,
        logOut,
        admin,
        register,
        googleLogIn,
        loginWithEmail
    }
}
export default useFirebase;