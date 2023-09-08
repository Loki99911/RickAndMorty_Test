import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomDispach";
import { useEffect } from "react";
import { getAllCharacters } from "../../redux/Characters/charactersOperations";
import { allCharacters } from "../../redux/Characters/charactersSelectors";
import CardComp from "../../components/CardComp/CardComp";
import { MainPageWrapper, CardsList } from "./MainPage.styled";
const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(allCharacters);
  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  allCharacters;
  console.log(cards);

  return (
    <MainPageWrapper>
      <p>Main Page</p>
      <CardsList>
        {cards.map((el) => (
          <CardComp key={el.id} />
        ))}
      </CardsList>
    </MainPageWrapper>
  );
};

export default MainPage;
