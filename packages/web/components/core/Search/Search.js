import { FiSearch } from "react-icons/fi";

import * as S from "./Search.styles.js";

function toggleSearch(focus) {
  const search = document.querySelector("#search");
  const input = search.querySelector(".aa-Input");
  const skrim = document.querySelector("#search-skrim");
  const body = document.querySelector("body");

  search.classList.toggle("open");
  skrim.classList.toggle("open");
  body.classList.toggle("disable-scroll");

  if (focus) {
    input.focus();
  } else {
    input.blur();
  }
}

export function SearchIcon() {
  return (
    <S.SearchButton type="button" onClick={() => toggleSearch(true)}>
      <FiSearch />
    </S.SearchButton>
  );
}

export function Search() {
  return <S.Search id="search">{/*  */}</S.Search>;
}

export function SearchSkrim() {
  return (
    <S.Skrim
      id="search-skrim"
      type="button"
      onClick={() => toggleSearch(false)}
    />
  );
}
