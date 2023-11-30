import {useParams ,useOutletContext, Outlet,Navigate} from "react-router-dom";
import Note from "./Note.jsx"
function NotesLayout ({notes}){
  const {id } =useParams();
  const note=notes.find((n) => n.id===id)
if(!note){
     return (
     <Navigate to={"/"} />);
   }
  else{
    return (<>
    <Outlet context={note}/>
    </>);
  }
}
export function UseNote(){
  const note=useOutletContext();
  return note;
}
export default NotesLayout;