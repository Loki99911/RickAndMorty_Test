import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomDispach";
import { useEffect } from "react";
import { getAllCharacters } from "../../redux/Characters/charactersOperations";
import { allCharacters } from "../../redux/Characters/charactersSelectors";
import CardComp from "../../components/CardComp/CardComp";
import { getCountOfCharacters } from "../../redux/Pagination/paginationOperations";
import PaginationRounded from "../../components/PaginationRounded/PaginationRounded";
import { Filter } from "../../components/Filter/Filter";
import { addEpisodeForChar } from "../../helpers/addEpisodeForChar";
import { FAB } from "../../components/FAB/FAB";
import { totalCount } from "../../redux/Pagination/paginationSelectors";
import { setCurrentCharacterNull } from "../../redux/Characters/charactersReducer";
import useLocalStorage from "../../hooks/useLocalStorage";
import { MainPageWrapper, CardsList } from "./MainPage.styled";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(allCharacters);
  const [fullCharactersArr, setFullCharactersArr] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentEpisodes, setCurrentEpisodes] = useState([]);
  const count = useAppSelector(totalCount);
  const { storage } = useLocalStorage({ key: "history" });

  useEffect(() => {
    dispatch(getCountOfCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (count) setTotalPages(count);
  }, [count]);

  useEffect(() => {
    dispatch(setCurrentCharacterNull());
    dispatch(getAllCharacters({ page, characters: fullCharactersArr }));
  }, [page, dispatch, fullCharactersArr]);

  useEffect(() => {
    if (cards.length > 0) {
      addEpisodeForChar(cards).then((res) => setCurrentEpisodes(res));
    }
  }, [cards]);

  return (
    <MainPageWrapper>
      <Filter
        setFullCharactersArr={setFullCharactersArr}
        setPage={setPage}
        setTotalPages={setTotalPages}
      />
      <CardsList>
        {cards.map((el) => (
          <CardComp key={el.id} character={el} episodesArr={currentEpisodes} />
        ))}
        <FAB storage={storage} />
      </CardsList>
      <PaginationRounded
        changePage={setPage}
        totalPages={totalPages}
        page={page}
      />
    </MainPageWrapper>
  );
};

export default MainPage;
