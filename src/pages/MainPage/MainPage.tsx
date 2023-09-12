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
import { addEpisodeForChar } from "../../helpers/addEpisodeForChar";
import { FAB } from "../../components/FAB/FAB";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(allCharacters);
  const [page, setPage] = useState(1);
  const [currentEpisodes, setCurrentEpisodes] = useState([]);

  useEffect(() => {
    dispatch(getCountOfCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const currentCharacters = [1, 2, 3, 4, 5, 6].map(
      (el) => 6 * (page - 1) + el
    );
    dispatch(getAllCharacters(currentCharacters));
  }, [page, dispatch]);

  useEffect(() => {
    if (cards.length > 0) {
      addEpisodeForChar(cards).then((res) => setCurrentEpisodes(res));
    }
  }, [cards]);

  return (
    <MainPageWrapper>
      <Filter />
      <CardsList>
        {cards.map((el) => (
          <CardComp key={el.id} character={el} episodesArr={currentEpisodes} />
        ))}
        <FAB />
      </CardsList>
      <PaginationRounded changePage={setPage} />
    </MainPageWrapper>
  );
};

export default MainPage;
