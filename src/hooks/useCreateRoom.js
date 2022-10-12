import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useMutation } from "react-query";
import { useFirestore, useAuth } from "reactfire";

export default function useCreateRoom(host) {
    const auth = useAuth();
  const firestore = useFirestore();

  const mutation = useMutation(() => createRoom(firestore, auth.currentUser.uid));
  return mutation;
}

const createRoom = async (firestore, hostId, enableBuzzers) => {
  const roomId = randomId();
  const roomRef = doc(firestore, "rooms", roomId);
  const room = await getDoc(roomRef);
  if (room.exists()) {
    return createRoom(firestore, hostId, enableBuzzers);
  }
  await setDoc(roomRef, { hostId, timestamp: serverTimestamp(), enableBuzzers: false });

  return roomId;
};

const randomId = () => Math.random().toString().substr(2, 6);

