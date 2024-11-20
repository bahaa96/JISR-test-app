import { Menu, Item, useContextMenu } from "react-contexify";

import fileTreeData from "./network/requestFetchAllFiles.json";
import PathItemComponent from "./PathItemComponent";
import $fixMe from "./types/fixme";

import "react-contexify/ReactContexify.css";
import "./App.css";

function App() {
  const { show } = useContextMenu({
    id: "MENU_ID",
  });

  return (
    <>
      <div className="pageContainer">
        <div
          className="fileTreeWrapper"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
          tabIndex={-1}
        >
          <ul className="fileTree">
            <PathItemComponent
              data={[fileTreeData] as $fixMe}
              onItemContextMenu={(event) =>
                show({
                  event,
                  props: {
                    key: (event.target as HTMLElement).innerText,
                  },
                })
              }
            />
          </ul>
          <Menu id={"MENU_ID"}>
            <Item id="copy" onClick={({ id, props }) => console.log(id, props)}>
              Copy
            </Item>
            <Item
              id="rename"
              onClick={({ id, props }) => console.log(id, props)}
            >
              Rename
            </Item>
            <Item
              id="delete"
              onClick={({ id, props }) => console.log(id, props)}
            >
              Delete
            </Item>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default App;
