import { InputBase, IconButton } from "@mui/material";
 import SearchIcon  from "@mui/icons-material/Search"
export default Search =  () => {
  return (
    <>
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
    </>
  );
};
