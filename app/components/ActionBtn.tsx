import { IconType } from "react-icons";

interface ActionBtnProps {
  icon: IconType;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionBtn: React.FC<ActionBtnProps> = ({ icon: Icon, disabled, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center rounded cursor-pointer border border-slate-400 text-slate-700 h-[30px] w-[40px] hover:bg-slate-300 ${
        disabled && "opacity-50 cursor-not-allowed"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon size={18} />
    </button>
  );
};

export default ActionBtn;
