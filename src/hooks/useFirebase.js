import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuthentication from "../components/Shared/Login/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const auth = getAuth();

  // --------------registration part


 
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    if (e.target.value.length < 6) {
     setError("password must need to be at least 6 characters");
     
     return;
    } else {
      setPassword(e.target.value);
      setError("")
    }
  };
  const setUserName = (e) => {
   
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })

  }
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        
         setUserName();
         window.location.reload();
         setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
  };

  // loggin Part

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        window.location.reload();
        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // google sign in part
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    // const history =useHistory()
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      // .then((result) => {
      //   setUser(result.user);
      //   window.location.reload();
      // })
      // .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    isLoading,
    signInWithGoogle,
    logOut,
    handleEmailChange,
    handlePasswordChange,
     handleRegistration,
    handleLogin,
    handleNameChange,
    setUserName,
    error
  };
};

export default useFirebase;
