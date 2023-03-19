import React, { Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import {EditorState , convertToRaw} from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftTOHtml from "draftjs-to-html";


export default class TextEditor extends Component {

    state ={
        editorState : EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState)=>{
        this.setState({
            editorState,
        })

    }


  render() {
    const {editorState} = this.state;
    console.log(draftTOHtml(convertToRaw(editorState.getCurrentContent())))
    return (
      <div>
        <h1>Text Editor</h1>
        <Editor ClassName='editor'
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>

<textarea disabled value={
    draftTOHtml(convertToRaw(editorState.getCurrentContent()))
}></textarea>
      </div>
    );
  }
}
