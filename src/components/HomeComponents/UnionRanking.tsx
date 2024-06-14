"use client";

import React from "react";

import useUnionRankingQuery from "@/hook/useUnionRankingQuery";

const UnionRanking = () => {
  const { data, isError, isLoading } = useUnionRankingQuery();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러!</div>;
  }

  const ranking = data?.data.ranking;

  const onClickgetUserInfoHandler = () => {};

  return (
    <>
      <h2 className="w-fit mx-auto">유니온 랭킹</h2>

      <section className="border border-solid border-primary-200 w-fit h-52 mx-auto overflow-y-auto scrollbar-hide">
        <div className="flex text-center border-b border-solid border-primary-200">
          <ul className="w-10 border-r border-solid border-primary-200">
            랭킹
          </ul>
          <ul className="w-32 border-r border-solid border-primary-200">
            이름
          </ul>
          <ul className="w-28 border-r border-solid border-primary-200">
            직업
          </ul>
          <ul className="w-28 border-r border-solid border-primary-200">
            유니온 레벨
          </ul>
          <ul className="w-20">서버</ul>
        </div>

        {ranking &&
          ranking.map((item) => (
            <div key={item.ranking} className="flex cursor-pointer">
              <ul className="w-10 border-r border-solid border-primary-200 text-center">
                {item.ranking}
              </ul>
              <ul className="w-32 border-r border-solid border-primary-200 text-center">
                {item.character_name}
              </ul>
              <ul className="w-28 border-r border-solid border-primary-200 text-center">
                {item.class_name}
              </ul>

              <ul className="w-28 border-r border-solid border-primary-200 text-center">
                {item.union_level}
              </ul>
              <ul className="w-20 text-center">{item.world_name}</ul>
            </div>
          ))}
      </section>
    </>
  );
};

export default UnionRanking;
