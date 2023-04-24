import { ReactNode } from "react";

// interface defines the shape of the props
interface Props {
  children: ReactNode;
  onClose: () => void
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible fade show">
      {children}
      <button className="btn-close" data-dismiss="alert" onClick={onClose} />
       
      
    </div>
  );
};

export default Alert;
