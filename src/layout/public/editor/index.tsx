import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const LayoutEditor: FC<Props> = (props) => {
  return (
    <div>
      <h1>LayoutEditor</h1>
    </div>
  );
};

export default LayoutEditor;
