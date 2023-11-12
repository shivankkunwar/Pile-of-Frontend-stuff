import { useState } from "react";

interface DataField {
    id: string;
    name: string;
    isFolder: boolean;
    items: DataField[];
  }
interface FolderProps {
    spec: DataField;
}

const Folder: React.FC<FolderProps> = ({ spec }:any) => {
  const [expand, setExpand] = useState(false);
  if (spec.isFolder) {
    return (
      <div className="per-folder">
        <div onClick={() => setExpand(!expand)}>📂{spec.name}</div>
        <div className="nested" style={{ display: expand ? "block" : "none" }}>
          {spec.items.map((curr: DataField , id: number) => {
            return <Folder key={id} spec={curr} />;
          })}
        </div>
      </div>
    );
  } else return <div className="file-active">📃{spec.name}</div>;
};
export default Folder;
