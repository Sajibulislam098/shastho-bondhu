import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,

} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Shared/Login/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // --------------registration part
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    if (e.target.value.length < 6) {
      console.error("password must need to be at least 6 characters");
      return;
    } else {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        
      })
      .catch((error) => console.log(error.message));
  };



  // google sign in part
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
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
    handleOnSubmit
  };
};

export default useFirebase;