import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomDispach";
import { useEffect } from "react";
import { getAllCharacters } from "../../redux/Characters/charactersOperations";
import { allCharacters, isLoadingCharacters } from "../../redux/Characters/charactersSelectors";
import CardComp from "../../components/CardComp/CardComp";
import { getCountOfCharacters } from "../../redux/Pagination/paginationOperations";
import PaginationRounded from "../../components/PaginationRounded/PaginationRounded";
import { Filter } from "../../components/Filter/Filter";
import { addEpisodeForChar } from "../../helpers/addEpisodeForChar";
import { FAB } from "../../components/FAB/FAB";
import { totalCount } from "../../redux/Pagination/paginationSelectors";
import { setCurrentCharacterNull } from "../../redux/Characters/charactersReducer";
import useLocalStorage from "../../hooks/useLocalStorage";
import { MainPageWrapper, CardsList, FilterWrapper } from "./MainPage.styled";
import { Backdrop } from "@mui/material";
import { FormicForm } from "../../components/FormicForm/FormicForm";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import { Loader } from "../../components/Loader/Loader";
import { scrollToTop } from "../../helpers/scrollUp";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(allCharacters);
  const [fullCharactersArr, setFullCharactersArr] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false);
  const [currentEpisodes, setCurrentEpisodes] = useState([]);
  const [fields, setfields] = useState<string[]>([]);
  const [inputActive, setInputActive] = useState(false);
  const [selectedOptionsBackdrop, setSelectedOptionsBackdrop] = useState<
    string[]
  >([]);
  const [filterShown, setFilterShown] = useState<boolean>(false);
  const count = useAppSelector(totalCount);
  const loading = useAppSelector(isLoadingCharacters);
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
  scrollToTop();
  }, [page, dispatch, fullCharactersArr]);

  useEffect(() => {
    if (cards.length > 0) {
      addEpisodeForChar(cards).then((res) => setCurrentEpisodes(res));
    }
  }, [cards]);

  const toggleFilter = () => {
    setFilterShown((prev) => !prev);
  };


  return (
    <MainPageWrapper>
      <FilterWrapper style={{ display: "flex" }}>
        {!filterShown && (
          <CustomBtn variant="contained" clickAction={toggleFilter}>
            Filter
          </CustomBtn>
        )}
        {filterShown && (
          <>
            <Filter
              setFullCharactersArr={setFullCharactersArr}
              setPage={setPage}
              setTotalPages={setTotalPages}
              openBackdrop={openBackdrop}
              setOpenBackdrop={setOpenBackdrop}
              inputActive={inputActive}
              setfields={setfields}
              selectedOptionsBackdrop={selectedOptionsBackdrop}
              setSelectedOptionsBackdrop={setSelectedOptionsBackdrop}
              toggleFilter={toggleFilter}
            />
            <FormicForm
              currentFields={fields}
              selectedOptionsBackdrop={selectedOptionsBackdrop}
              setOpenBackdrop={setOpenBackdrop}
              setInputActive={setInputActive}
              setFullCharactersArr={setFullCharactersArr}
              setPage={setPage}
              setTotalPages={setTotalPages}
            />
          </>
        )}
      </FilterWrapper>
      {loading ? (
        <Loader />
      ) : (
        <CardsList>
          {cards.map((el) => (
            <CardComp key={el.id} character={el} episodesArr={currentEpisodes} />
          ))}
          <FAB storage={storage} />
        </CardsList>)}
      <PaginationRounded
        changePage={setPage}
        totalPages={totalPages}
        page={page}
      />
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        open={openBackdrop}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setOpenBackdrop(false);
          }
        }}
      ></Backdrop>
    </MainPageWrapper>
  );
};

export default MainPage;
