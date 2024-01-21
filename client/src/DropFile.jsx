import { useState, useRef } from "react";
import './DropFile.css';
import uploadIcon from ".\\assets\\cloud_upload_icon.png"

function DropFile() {
  const [dragText, setDragText] = useState("Drag & Drop");
  const [file, setFile] = useState();
  const inputFile = useRef(null)

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragText("Release to Upload");
  }
  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragText("Drag & Drop");
  }
  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragText("Release to Upload");
  }
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setFile(e.dataTransfer.files[0]);
    // console.log(file);
  }
  function filePicker(e) {
    e.preventDefault();
    inputFile.current.click();
  }
  function tt(e) {
    e.preventDefault();
    console.log("inputFile");
    console.log(inputFile);
    console.log("file");
    console.log(file);
  }
  return (
    <form>
      <div className="container">
        <button onClick={e => tt(e)}>test</button>
        <h3>Upload Your Resume</h3>
        <div className="drag-drop-area"
          onDrop={e => handleDrop(e)}
          onDragOver={e => handleDragOver(e)}
          onDragEnter={e => handleDragEnter(e)}
          onDragLeave={e => handleDragLeave(e)}
        >
          <div className="icon">
            <img src={uploadIcon} alt="cloud upload icon"/>
          </div>
          <span className="header">{dragText}</span>
          <span className="header"> or <span className="browse" onClick={e => filePicker(e)}>browse</span></span>
          {/* <span className="header"> or </span> */}
          <input type='file' ref={inputFile} style={{display: 'none'}}/>
        </div>
      </div>
      <button className="submit" type="submit" onClick={e => e.preventDefault()}>Submit</button>
    </form>
  );
}

export default DropFile;