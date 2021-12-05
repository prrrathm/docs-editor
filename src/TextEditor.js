import React from 'react'
import { Editor, EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";

const style = { 
    border: "1px solid #303030",
    borderRadius : '10px', 
    minHeight: "6em", 
    cursor: "text",
    margin : '0 5em',
    padding : '1em 2em'
    }

const TextEditor = () => {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );

    const editor = React.useRef(null);
    function focusEditor() {
        editor.current.focus();
    }

    onChange = (editorState) => {
        const contentState = editorState.getCurrentContent();
        console.log('content state', convertToRaw(contentState));
        this.setState({
          editorState,
        });
      }
    
    return (
        // <div style={{display:'flex',flexDirection:"column",alignItems:'center'}}>
            <div style={style} onClick={focusEditor} >
                <Editor
                ref={editor}
                editorState={editorState}
                onChange={setEditorState}
                placeholder="Write something!"
                textAlignment='center'                
                />
            </div>
        // </div>
    )
}

export default TextEditor
