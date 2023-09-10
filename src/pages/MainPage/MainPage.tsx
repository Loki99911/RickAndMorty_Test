import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomDispach";
import { useEffect } from "react";
import { getAllCharacters } from "../../redux/Characters/charactersOperations";
import { allCharacters } from "../../redux/Characters/charactersSelectors";
import CardComp from "../../components/CardComp/CardComp";
import { MainPageWrapper, CardsList } from "./MainPage.styled";
import { getCountOfCharacters } from "../../redux/Pagination/paginationOperations";
import PaginationRounded from "../../components/PaginationRounded/PaginationRounded";
import { Filter } from "../../components/Filter/Filter";
const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(allCharacters);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCountOfCharacters());
  }, [dispatch]);

  useEffect(() => {
    const currentCharacters = [1, 2, 3, 4, 5, 6].map(
      (el) => 6 * (page - 1) + el
    );
    dispatch(getAllCharacters(currentCharacters));
  }, [page, dispatch]);

  console.log(page);

  return (
    <MainPageWrapper>
      <p>Main Page</p>
      <Filter/>
      <CardsList>
        {cards.map((el) => (
          <CardComp key={el.id} character={el} />
        ))}
      </CardsList>
      <PaginationRounded changePage={setPage} />
    </MainPageWrapper>
  );
};

export default MainPage;
