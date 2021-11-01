import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Standing.module.css";
import Loader from "react-loader-spinner";
import Image from "next/image";

const Standing = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios({
        method: "get",
        url: `http://api.football-data.org/v2/competitions/${props.id}/standings`,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          "X-Auth-Token": "84019147ef2a45a78afe6dcf4919a779",
        },
      })
        .then((response) => {
          // console.log(response.data.competitions);
          //   console.log(response)
          //   console.log(response.data.competition);
          //   const newData = response.data.competitions.filter((item) => {});
          // console.log(newData);
          setData(response.data);
        })
        .catch((err) => {
          // console.log(err.response);
        });
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {data.standings ? (
        data.standings.map((cl) => (
          <div key={cl.group} className="card shadow mb-3">
            <div className={`card-body  ${styles.table}`}>
              <div className="px-1 py-2">
                <div className=" ">
                  <h5
                    style={{
                      paddingLeft: "20px",
                      paddingTop: "20px",
                      color: "#292a2a",
                    }}
                  >
                    {cl.group}
                  </h5>
                  <div className={`text-muted ${styles.header}`}>
                    <div></div>
                    <div className={styles.teamName}>Team</div>
                    <div>MP</div>
                    <div>W</div>
                    <div>D</div>
                    <div>L</div>
                    <div>GS</div>
                    <div>GC</div>
                    <div>PTS</div>
                  </div>

                  {cl.table.map((i) => (
                    <div key={i.team.name} className={` ${styles.header}`}>
                      <div>{i.position}</div>
                      <div className={styles.teamName}>
                        <Image
                          src={i.team.crestUrl}
                          className="me-1"
                          width={30}
                          height={30}
                          alt="crest"
                        />{" "}
                        {i.team.name}
                      </div>
                      <div>{i.playedGames}</div>
                      <div>{i.won}</div>
                      <div>{i.draw}</div>
                      <div>{i.lost}</div>
                      <div>{i.goalsFor}</div>
                      <div>{i.goalsAgainst}</div>
                      <div>{i.points}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loader
          type="Puff"
          color="#00BFFF"
          style={{ textAlign: "center" }}
          height={300}
          width={300}
          // timeout={4000} //3 secs
        />
      )}
    </div>
  );
};

export default Standing;

{
  /* <div>
  {data.code === "CL" || data.code === "EC" ? (
    data.standings ? (
      data.standings.map((cl, i) => (
        <div key={cl.group}>
          <h5
            style={{
              paddingLeft: "20px",
              paddingTop: "20px",
              color: "#292a2a",
            }}
          >
            {cl.group}
          </h5>
          <div className={`text-muted ${styles.header}`}>
            <div></div>
            <div className={styles.teamName}>Team</div>
            <div>MP</div>
            <div>W</div>
            <div>D</div>
            <div>L</div>
            <div>GS</div>
            <div>GC</div>
            <div>PTS</div>
          </div>

          <div className={` ${styles.header}`}>
            <div>{cl.table.position}</div>
            <div className={styles.teamName}>
              <Image
                src={cl.table[i].team.crestUrl}
                className="me-1"
                width={30}
                height={30}
                alt="crest"
              />{" "}
              {cl.table.team.name}
            </div>
            <div>{cl.playedGames}</div>
            <div>{cl.won}</div>
            <div>{cl.draw}</div>
            <div>{cl.lost}</div>
            <div>{cl.goalsFor}</div>
            <div>{cl.goalsAgainst}</div>
            <div>{cl.points}</div>
          </div>
        </div>
      ))
    ) : (
      <Loader
        type="Puff"
        color="#00BFFF"
        style={{ textAlign: "center" }}
        height={300}
        width={300}
        // timeout={4000} //3 secs
      />
    )
  ) : data.standings ? (
    data.standings[0].table.map((team) => (
      <div key={team.team.id} className={` ${styles.header}`}>
        <div>{team.position}</div>
        <div className={styles.teamName}>
          <Image
            src={team.team.crestUrl}
            className="me-1"
            width={30}
            height={30}
            alt="crest"
          />{" "}
          {team.team.name}
        </div>
        <div>{team.playedGames}</div>
        <div>{team.won}</div>
        <div>{team.draw}</div>
        <div>{team.lost}</div>
        <div>{team.goalsFor}</div>
        <div>{team.goalsAgainst}</div>
        <div>{team.points}</div>
      </div>
    ))
  ) : (
    <Loader
      type="Puff"
      color="#00BFFF"
      style={{ textAlign: "center" }}
      height={300}
      width={300}
      // timeout={4000} //3 secs
    />
  )}
</div>; */
}
