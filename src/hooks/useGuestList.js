import { collection } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import useRoom from "./useRoom";

export default function useGuestList() {
  const { id: roomId } = useRoom();
  const firestore = useFirestore();
  const guestListRef = collection(firestore, "rooms", roomId, "guests");
  const { data: guestList } = useFirestoreCollectionData(guestListRef, {
    idField: "id",
  });

  return guestList;
}
