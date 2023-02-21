import "./style.scss";

interface Props {
  id: string;
  isActive: boolean;
  icon: string;
  label: string;
  onClick: (id: string) => void;
}

export const List = ({ id, isActive, icon, label, onClick }: Props) => {
  return (
    <li
      id={id}
      key={id}
      onClick={() => onClick(id)}
      className={isActive ? "list-container selected" : "list-container"}
    >
      <img className="color-select" src={icon} alt={label} />
      <p>{label}</p>
    </li>
  );
};
