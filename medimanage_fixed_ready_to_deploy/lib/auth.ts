import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "@/config/firebase";

export async function loginUser(
  email: string,
  password: string
) {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
}

export async function logoutUser() {
  return signOut(auth);
}