import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";

interface Props {
  json: Record<string, any>;
}

const JsonViewer: React.FC<Props> = ({ json }) => {
  return (
    <JsonView
      data={json}
      shouldExpandNode={allExpanded}
      style={defaultStyles}
    />
  );
};

export default JsonViewer;
