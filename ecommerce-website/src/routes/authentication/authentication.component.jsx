// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   // auth,
//   signInWithGooglePopup,
//   // signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(() => {
  //   // Define the async function inside the useEffect
  //   const fetchData = async () => {
  //     try {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     } catch (error) {
  //       console.error("Failed to get redirect result:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
