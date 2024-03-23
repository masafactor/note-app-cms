import Link from "next/link";
import { getNotesList } from "../lib/client";
import { Note } from "./type";
import parse from "html-react-parser";


type NoteProps ={
  note:Note;
};

export default async function Page(){
const noteLists = await getNotesList();
console.log(noteLists);

  return (<div className="grid sm:grid-cols-2 xl:grid col-span-3  gap-8 sm:gap-10 mt-10">
    {noteLists.contents.map((note)=>(
      
      <NoteItem key={note.id}note={note}/>
    ))}

    {/* <NoteItem />
    <NoteItem />
    <NoteItem /> */}
  </div>)
}

const NoteItem = ({note}:NoteProps)=>{
  return(
    <div className="bg-gray-100 rounded-lg p-5">
      <Link href={`/notes/${note.id}`} legacyBehavior>
      <a><h3 className="text-purple-500 hover:text-purple-700 text-lg md:text-xl font-semibold mb-3 underline">
        {parse(note.title)}</h3></a>
      </Link>
      <p>{parse(note.content)}</p>
    </div>
  );

}
  