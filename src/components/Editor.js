import ReactMde from "react-mde";
import showndown from "showndown";
import { useState } from "react";

const Editor = ({ currentNote, updateNote }) => {
    const [selectedTab, setSelectedTab] = useState("write");

    const converter = new showndown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    })


    return (
        <section className="panel editor">

            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHTML(markdown))
                }
                minEditHeight={80}
                heightUnit="vh"
            />

        </section>
    )

}


export default Editor