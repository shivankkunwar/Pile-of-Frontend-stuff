
import Folder from "./component/Folder.js";
import dataField from "./data/dataField.js";
import "./styles.css"
function fileExplorer() {
    return (
    <div className="file-explorer" >
        <h1>File Explorer</h1>
        <p>Click on folders to expand</p>
        <div className="folder-container">
            <Folder spec={dataField} />
        </div>
        
    </div>
    )
}
export default fileExplorer;