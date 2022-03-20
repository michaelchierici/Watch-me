import React, { useEffect, useState } from "react";
import { api } from "./services/api";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

import "./styles/content.scss";
import "./styles/sidebar.scss";

export const genreContext = React.createContext({});
export const idContext = React.createContext({});

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <idContext.Provider value={{ selectedGenreId, setSelectedGenreId }}>
        <SideBar />
        <Content />
      </idContext.Provider>
    </div>
  );
}

export const useGenre = () => React.useContext(genreContext);
export const useId = () => React.useContext(idContext);
