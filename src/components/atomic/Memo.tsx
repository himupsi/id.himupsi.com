import { useRef, FC, useEffect } from "react";

interface MemoProps {
    text: string;
    color: string;
    bgColor: string;
    isNew?: boolean;
    onClick?: Function;
}

const memoStyle: React.CSSProperties  = {
  display: 'flex',
  height: '200px',
  padding: '10px',
  boxShadow: '5px 5px 15px #ccc',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '50px',
}

const Memo: FC<MemoProps> = ( { text, color, bgColor }) => {
  return (
    <div style={{ ...memoStyle, backgroundColor: bgColor, color }}>
      { text }
    </div>
  );
}


export default Memo;

