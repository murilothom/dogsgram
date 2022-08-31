import React, { useEffect, useState } from "react";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";

import styles from "./UserStatsGraphs.module.css";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setGraph(
      data.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        };
      })
    );
    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((prev, curr) => prev + curr)
    );
  }, [data]);

  if(!data) return null
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;