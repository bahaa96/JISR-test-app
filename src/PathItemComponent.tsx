import { MouseEventHandler } from "react";

interface IProps {
  onItemContextMenu: MouseEventHandler;
  data: Array<{
    type: string;
    name: string;
    data: IProps["data"];
  }>;
}

const PathItemComponent = ({ data, onItemContextMenu }: IProps) => {
  return (
    <>
      {data.map((parent) => {
        const _isFolder = parent.type === "folder";
        return (
          <>
            {/* rendering folders */}
            {_isFolder ? (
              <li key={parent.name} onContextMenu={onItemContextMenu}>
                <details>
                  <summary className={"top-level"}>{parent.name}</summary>

                  {parent.data && (
                    <ul>
                      <PathItemComponent data={parent.data} />
                    </ul>
                  )}
                </details>
              </li>
            ) : (
              <li
                key={parent.name}
                onContextMenu={onItemContextMenu}
                tabIndex={0}
              >
                {/* rendering files */}
                <file>
                  <input
                    type="radio"
                    name="hosted_files"
                    id={parent.name}
                    value={parent.name}
                  />
                  <label htmlFor={parent.name}>{parent.name}</label>
                </file>
              </li>
            )}
          </>
        );
      })}
    </>
  );
};

export default PathItemComponent;