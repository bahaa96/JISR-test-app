import fileTreeData from "./folders.json";
import PathItemComponent from "./PathItemComponent";

import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/ReactContexify.css";
import "./App.css";
import $fixMe from "./types/fixme";

function App() {
  const { show } = useContextMenu({
    id: "MENU_ID",
  });

  const handleMenuItemClick = ({ id, event, props }) => {
    switch (id) {
      case "copy":
        console.log(event, props);
        break;
      case "delete":
        console.log(event, props);
        break;
      case "rename":
        console.log(event, props);
        break;
      default:
        return;
    }
  };

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
              data={[fileTreeData]}
              onItemContextMenu={(event: $fixMe) =>
                show({
                  event,
                  props: {
                    key: "value",
                  },
                })
              }
            />
          </ul>
          <Menu id={"MENU_ID"}>
            <Item id="copy" onClick={handleMenuItemClick}>
              Copy
            </Item>
            <Item id="rename" onClick={handleMenuItemClick}>
              Rename
            </Item>
            <Item id="delete" onClick={handleMenuItemClick}>
              Delete
            </Item>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default App;
