// src/AuthForm.js
import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const AuthForm = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCred = await signInWithPopup(auth, provider);

    // Save user info to Firestore (only on first signup)
    await setDoc(
      doc(db, "users", userCred.user.uid),
      {
        email: userCred.user.email,
        createdAt: new Date().toISOString(),
        provider: "google"
      },
      { merge: true } // won't overwrite existing data
    );

    alert("Signed in with Google!");
  } catch (err: unknown) {
    if (err instanceof Error) {
      alert(err.message);
    } else {
      alert("Google sign-in failed.");
    }
  }
};