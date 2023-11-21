import { useRef, FC, useEffect } from "react";

interface ContainerProps {
}

const loadingStyle: React.CSSProperties  = {
  display: 'flex',
  flex: '0 0 50px',
  justifyContent: 'center',
}

const Container: FC<ContainerProps> = () => {
  return (
    <div style={loadingStyle}>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );
}


export default Container;