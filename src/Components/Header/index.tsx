import { useState } from "react";
import MenuDown from "./MenuDown";
import { HeaderContent } from "./HeaderContent";
import SearchScreen from "./SearchScreen";

export default function Header() {
  const [menuHide, setMenuHide] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <> 
      {menuHide ? 
          <MenuDown OnsetMenuHide={setMenuHide} /> 
          : 
        (<>
          {search ? 
            <SearchScreen 
              onSearchActive={setSearch}
            />
            :
            <HeaderContent  
              onSetMenuHide={setMenuHide} 
              onActiveSearch={setSearch} 
            />}
        </>)}
    </>
  )
}
