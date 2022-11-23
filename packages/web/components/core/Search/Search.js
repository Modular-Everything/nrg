import { FiSearch } from "react-icons/fi";

import * as S from "./Search.styles.js";

function toggleSearch() {
  const search = document.querySelector("#search");
  const skrim = document.querySelector("#search-skrim");
  const body = document.querySelector("body");
  search.classList.toggle("open");
  skrim.classList.toggle("open");
  body.classList.toggle("disable-scroll");
}

export function SearchIcon() {
  return (
    <S.SearchButton type="button" onClick={() => toggleSearch()}>
      <FiSearch />
    </S.SearchButton>
  );
}

export function Search() {
  return <S.Search id="search">{/*  */}</S.Search>;
}

export function SearchSkrim() {
  return (
    <S.Skrim id="search-skrim" type="button" onClick={() => toggleSearch()} />
  );
}
