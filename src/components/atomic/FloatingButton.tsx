import { FC, useState } from "react";
import { interactionCountAtom } from '../../states/atom';
import { LUCKS } from "../../data/Data"
import { useRecoilState } from "recoil";
import { preloadImages } from "../../api/api";

const style: React.CSSProperties  = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  backgroundSize: '50px 50px',
  border: 'none',
  background: 'url("/images/logo_50.png" ) no-repeat',
  transition: '.1s linear',
  opacity: 0.8,
}

const hoverStyle: React.CSSProperties  = {
  opacity: 1,
  transform: 'rotate(10deg)'
}

interface FloatingButtonProps {
  onClick?: Function
}

const getRandomLuck = () => {
  return LUCKS[Math.floor(Math.random() * LUCKS.length)];
}

preloadImages(['/images/logo_50.png', '/images/look_50.png']);

const FloatingButton: FC<FloatingButtonProps> = ({ onClick }) => {
  const [ interactionCount, setInteractionCount] = useRecoilState(interactionCountAtom);
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onButtonClick = () => {
    const dateString = new Date().toDateString()
    setIsClicked(true);
    let message = '...?';

    if (localStorage.getItem('LUCK_DATE') === dateString) {
      setIsClicked(true);
      if (interactionCount === 0) {
        message = '내일까지 기다리세요..';
      }
    } else {
      message = getRandomLuck();
      localStorage.setItem('LUCK_DATE', dateString);
    }
    setInteractionCount(interactionCount + 1);
    if (!isClicked) {
      setTimeout(() => {
        alert(message)
        setIsClicked(false);
      }, 300);
    }
  }
  return <button
    style={{
      ...style,
      ...isHover ? hoverStyle : undefined,
      ...isClicked ? { background: 'url("/images/look_50.png" ) no-repeat', opacity: 1 } : undefined,
    }}
      onClick={onButtonClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
    </button>
}

export default FloatingButton;