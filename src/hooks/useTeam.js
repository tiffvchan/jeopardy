import { doc, setDoc } from "firebase/firestore";
import { useQuery } from "react-query";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { useRoom } from ".";


export default function useTeam() {
  const { id: roomId } = useRoom();
  const firestore = useFirestore();
  const teamRef = doc(firestore, "rooms", roomId, "teams", randomId);
  const { data: team } = useFirestoreDocData(teamRef, { idField: "id" });
  const exists = !!team?.name;

  useQuery(
    "team",
    () => setDoc(teamRef, { name: `Team`, score: 0 }),
    { enabled: !exists }
  );
  return team;
}

const randomId = () => Math.random().toString().substr(2, 6);
