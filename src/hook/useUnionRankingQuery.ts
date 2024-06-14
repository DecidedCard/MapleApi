import { checkUnionRanking } from "@/api/mapleApi";

import { QUERY_KEY } from "@/util/queryKey";

import type { UnionRanking } from "@/types/unionRankingType";
import { useQuery } from "@tanstack/react-query";

const useUnionRankingQuery = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY.unionRanking],
    queryFn: () => checkUnionRanking<UnionRanking>(),
  });

  return { data, isLoading, isError };
};

export default useUnionRankingQuery;
