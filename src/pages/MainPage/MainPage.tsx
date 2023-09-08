import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomDispach";
import { useEffect } from "react";
import { getAllCharacters } from "../../redux/Characters/charactersOperations";
import { allCharacters } from "../../redux/Characters/charactersSelectors";
import CardComp from "../../components/CardComp/CardComp";
import { MainPageWrapper, CardsList } from "./MainPage.styled";
import { getCountOfCharacters } from "../../redux/Pagination/paginationOperations";
const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(allCharacters);
  useEffect(() => {
    dispatch(getCountOfCharacters());
    dispatch(getAllCharacters([1, 2, 3, 4, 5, 6]));
  }, [dispatch]);

  console.log(cards);

  return (
    <MainPageWrapper>
      <p>Main Page</p>
      <CardsList>
        {cards.map((el) => (
          <CardComp key={el.id} character={el} />
        ))}
      </CardsList>
    </MainPageWrapper>
  );
};

export default MainPage;
