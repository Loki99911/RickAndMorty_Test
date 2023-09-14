import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export default function MyDrawer({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (

    
    <Drawer
      anchor={"right"}
      open={isDrawerOpen}
      onClose={()=>setIsDrawerOpen(false)}
    >
      <h1>History</h1>
      <Button onClick={()=>setIsDrawerOpen(false)}>Close</Button>
    </Drawer>
  );
}
