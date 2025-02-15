function NoteList({ notes }) {
    console.log('[DEBUG] props', notes);
  
    return (
    <ul  className="w-1/3 mt-2">
        { notes.map( (note, index) =>
           <li
           key={ index }
           className="rounded-lg shadow-md min-h-24 text-lg bg-[#f4d616] mb-6 pt-8 px-6 pb-4 font-grandstander"
         >
            { note }
          </li>)
        }
      </ul>
    )
  }
  
  export default NoteList
  