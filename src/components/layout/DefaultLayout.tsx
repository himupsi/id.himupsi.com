import {FC, ReactNode} from "react";
import Container from "../atomic/Container";
import FloatingButton from "../atomic/FloatingButton";
import Header from "../atomic/Header";

interface DefaultLayoutProps {
  children?: ReactNode;
}

const style: React.CSSProperties  = {
  flex: '1 1 100%',
  display: 'flex',
  overflow: 'hidden',
}
const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div style={style} className="hus-flex-column">
      <Container>
        {children}
      </Container>
  </div>);
}

export default DefaultLayout;