import { useAtom } from "jotai";
import { v4 } from "uuid";
import pagesAtom, { pageSelectedAtom } from "./jotai";

const usePages = () => {
  const [pages, setPages] = useAtom(pagesAtom);
  const [page, setPage] = useAtom(pageSelectedAtom);
  const handleAddPage = () => {
    const newPage = {
      id: v4(),
    };
    setPage(newPage?.id);
    setPages((prev) => [...prev, newPage]);
  };

  const hnadleSelectPage = (id: string) => {
    setPage(id);
  };

  return {
    handleAddPage,
    pages,
    hnadleSelectPage,
    page,
  };
};

export default usePages;
