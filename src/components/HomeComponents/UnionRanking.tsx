import React from "react";

import { checkUnionRanking } from "@/api/mapleApi";

const UnionRanking = async () => {
  const { data } = await checkUnionRanking();
  console.log(data);
  return (
    <>
      <div>UnionRanking</div>
      <form>
        <input />
      </form>
    </>
  );
};

export default UnionRanking;
