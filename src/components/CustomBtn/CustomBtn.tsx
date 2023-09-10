import { StyledBtn } from "./CustomBtn.styled";

export default function CustomBtn({
  children,
  clickAction,
}: {
  children: string | number;
  variant: string;
  clickAction: ()=>void;
}) {
  return (
    <StyledBtn variant="contained" onClick={clickAction}>
      {children}
    </StyledBtn>
  );
}
