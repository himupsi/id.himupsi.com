import { FC, ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
}

const style: React.CSSProperties  = {
    flex: "1 1 400px",
    display: 'flex',
    overflow: 'overlay',
    justifyContent: 'center',
}

const Container: FC<ContainerProps> = ({children}) => {
  return (
    <main style={style}>
      {children}
    </main>
  );
}

export default Container;