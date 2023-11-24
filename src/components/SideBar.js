const SideBar = (props) => {
    const noteElements = props.note.map((note, index) => (
        <div key={note.id}>
            <div
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >

                <h4 className="text-snippet">Note {index + 1}</h4>

            </div>
        </div>
    ))

    return (
        <section className="panel sidebar">
            <div className="siderbar-header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}