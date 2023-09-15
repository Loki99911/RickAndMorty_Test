import { StyledBtn } from "./CustomBtn.styled";

export default function CustomBtn({
  children,
  clickAction,
  buttonType = "button",
}: {
  children: string | number;
  variant: string;
  buttonType?: string;
  clickAction?: () => void;
}) {
  return (
    <StyledBtn
      type={buttonType}
      variant="contained"
      onClick={clickAction}
    >
      {children}
    </StyledBtn>
  );
}
