import { collection } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import useRoom from "./useRoom";

export default function useTeamList() {
  const { id: roomId } = useRoom();
  const firestore = useFirestore();
  const teamListRef = collection(firestore, "rooms", roomId, "teams");
  const { data: teamList } = useFirestoreCollectionData(teamListRef, {
    idField: "id",
  });

  return teamList;
}
