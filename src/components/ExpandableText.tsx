import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  if(children.length < maxChars) return <p>{children}</p>
  
  const text = show ? children : children.substring(0, maxChars).trimEnd() + "..."

  return (
    <div>
      <p>
        {text}
        <button onClick={handleClick}>{show ? "Less" : "More"}</button>
      </p>
    </div>
  );
};

export default ExpandableText;
