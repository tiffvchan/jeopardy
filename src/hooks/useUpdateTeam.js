import { doc, updateDoc } from "firebase/firestore";
import { useMutation } from "react-query";
import { useFirestore } from "reactfire";
import useRoom from "./useRoom";

export default function useUpdateTeam(teamId) {
  const { id: roomId } = useRoom();
  const firestore = useFirestore();
  const teamListRef = doc(firestore, "rooms", roomId, "teams", teamId);

  return useMutation((updated) => updateDoc(teamListRef, updated));
}
