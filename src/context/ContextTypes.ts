export interface CategoryContextData {
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  handleClickButton: (id: string) => void;
  isActive: (id: string) => boolean;
}
