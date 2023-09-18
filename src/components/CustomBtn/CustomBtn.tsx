import { StyledBtn } from "./CustomBtn.styled";

export default function CustomBtn({
  disabled,
  children,
  variant,
  clickAction,
  buttonType = "button",
}: {
  disabled?:boolean;
  children: string | number;
  variant: string;
  buttonType?: string;
  clickAction?: () => void;
}) {
  return (
    <StyledBtn
      disabled={disabled}
      type={buttonType}
      variant={variant}
      onClick={clickAction}
    >
      {children}
    </StyledBtn>
  );
}
