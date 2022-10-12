import { useMutation } from "react-query";
import { useAuth } from "reactfire";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

export default function useHostUser() {
  const auth = useAuth();
  const mutation = useMutation(() => signIn(auth), {onSuccess: (data) => {
    }})
  return mutation;
}

const signIn = async (auth) => {
      const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
      }

    signInWithGoogle();
    return auth.currentUser;
    
  };