import { GetServerSideProps } from "next";
import { PrimaryLayout } from "../../components/layouts/primary/PrimaryLayout";
import { SearchResult } from "../../components/utilities/search-result/SearchResult";
import { ISearchData } from "../../lib/search/types";
import { IApiSearchReponseData } from "../api/search";
import { NextPageWithLayout } from "../page";

const Results: NextPageWithLayout<IResults> = ({ searchResults }) => {
  const hasResults = searchResults.length > 0;

  return (
    <>
      <section className="flex flex-col items-center gap-y-5">
        {hasResults ? (
          <div className={`flex flex-col space-y-8`}>
            {searchResults.map((result, index) => {
              return <SearchResult key={index} {...result} />;
            })}
          </div>
        ) : (
          <p>No results found</p>
        )}
      </section>
    </>
  );
};

export default Results;

interface IResults {
  searchResults: ISearchData[];
}

export const getServerSideProps: GetServerSideProps<IResults> = async ({
  query,
}) => {
  let searchResults: IApiSearchReponseData = [];
  const searchTerm = query.search;

  if (searchTerm && searchTerm.length > 0) {
    const response = await fetch(`http://localhost:3000/api/search`, {
      body: JSON.stringify({ searchTerm }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    searchResults = await response.json();
  }

  return {
    props: {
      searchResults,
    },
  };
};

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
