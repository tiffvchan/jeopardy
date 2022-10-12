import useRoom from "./useRoom";
import { useAuth } from "reactfire";


export default function useIsHost() {
  const { hostId } = useRoom();
  const auth = useAuth();
  const isHost = hostId === auth?.currentUser?.uid
  return  isHost || false;
}
