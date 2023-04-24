import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
    onClick: (liked: boolean) => void
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked)
    onClick(liked)
  }
  return (
    <div>
      {liked ? (
        <AiOutlineHeart size={40} onClick={toggle}/>
      ) : (
        <AiFillHeart color="red" size={40} onClick={toggle}/>
      )}
    </div>
  );
};

export default Like;
