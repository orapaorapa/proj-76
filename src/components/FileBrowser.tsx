import { useState } from "react";
import { Folder, File, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
}

const mockFiles: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Button.tsx", type: "file" },
          { name: "Input.tsx", type: "file" },
        ],
      },
      { name: "App.tsx", type: "file" },
      { name: "index.tsx", type: "file" },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "index.html", type: "file" },
      { name: "style.css", type: "file" },
    ],
  },
];

const FileNode = ({ node, depth = 0 }: { node: FileNode; depth?: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (node.type === "folder") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-1 px-2 hover:bg-gray-100 rounded cursor-pointer`}
        style={{ paddingLeft: `${depth * 20}px` }}
        onClick={handleClick}
      >
        {node.type === "folder" ? (
          <>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-500" />
            )}
            <Folder className="h-4 w-4 text-blue-500" />
          </>
        ) : (
          <>
            <span className="w-4" />
            <File className="h-4 w-4 text-gray-500" />
          </>
        )}
        <span className="text-sm">{node.name}</span>
      </div>
      {node.type === "folder" && isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <FileNode key={index} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const FileBrowser = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Explorateur de fichiers</h2>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            Nouveau fichier
          </Button>
          <Button variant="outline" size="sm">
            Nouveau dossier
          </Button>
        </div>
      </div>
      <div className="border rounded">
        {mockFiles.map((file, index) => (
          <FileNode key={index} node={file} />
        ))}
      </div>
    </div>
  );
};

export default FileBrowser;