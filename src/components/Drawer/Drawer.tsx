// import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import useLocalStorage from "../../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import {
  DrawerStyled,
  SearchCategoryTitle,
  SearchCategoryValue,
  SearchCharText,
  SearchCharTextAccent,
} from "./Drawer.styled";

type itemType = string | string[][];

export default function MyDrawer({
  storage,
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  storage: [];
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  const createHistoryItem = (item: itemType) => {
    if (typeof item === "string") {
      return (
        <SearchCharText key={uuidv4()}>
          Передивився інформацію що до{" "}
          <SearchCharTextAccent>{item}</SearchCharTextAccent>
        </SearchCharText>
      );
    } else {
      const categories = item[0].join(",");
      const values = item[1].filter((el: string) => el !== "").join(",");
      return (
        <div key={uuidv4()}>
          <SearchCategoryTitle>{categories}:</SearchCategoryTitle>
          <SearchCategoryValue>{values}</SearchCategoryValue>
        </div>
      );
    }
  };

  return (
    <DrawerStyled
      sx={{
        width: "420px",
        height: "570px",
        borderTopLeftRadius: "9px",
        borderBottomLeftRadius: "9px",
      }}
      anchor={"right"}
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <h1>History</h1>
      <ul>{storage.map((item: itemType) => createHistoryItem(item))}</ul>
      <Button onClick={() => setIsDrawerOpen(false)}>Close</Button>
    </DrawerStyled>
  );
}
