import React, { useEffect, lazy, Suspense } from "react";

import { GET_STATS } from "../../api";
import useFetch from "../../Hooks/useFetch";

import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = GET_STATS(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <Suspense fallback={<Loading />}>
      <Head title="Estatísticas" />
      <UserStatsGraphs data={data} />
    </Suspense>
  );
};

export default UserStats;
