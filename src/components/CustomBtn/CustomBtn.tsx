import { StyledBtn } from "./CustomBtn.styled";

export default function CustomBtn({
  children,
  clickAction,
  buttonType = "button",
  disabled,
}: {
  children: string | number;
  variant: string;
  buttonType?: string;
  clickAction?: () => void;
  disabled?:boolean;
}) {
  return (
    <StyledBtn
      type={buttonType}
      variant="contained"
      onClick={clickAction}
      disabled={disabled}
    >
      {children}
    </StyledBtn>
  );
}
