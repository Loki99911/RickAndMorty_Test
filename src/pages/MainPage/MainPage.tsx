import { FC } from "react";
import { useAppDispatch } from "../../hooks/useCustomDispach";
import { useEffect } from "react";
import { getAllCharacters } from "../../redux/Characters/charactersOperations";
const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <>
      <p>Main Page</p>
    </>
  );
};

export default MainPage;
