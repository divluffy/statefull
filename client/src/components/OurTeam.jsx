import React from "react";

import kamal from "../assets/avatar/kamal.jpg";
import luffy from "../assets/avatar/luffy.jpg";
import moh_ayesh from "../assets/avatar/moh_ayesh.jpg";
import noor from "../assets/avatar/noor.jpeg";
import alaa from "../assets/avatar/alaa.jpeg";
import ahmed from "../assets/avatar/ahmed.PNG";

function OurTeam() {
  const Team = [
    {
      name: "كمال الغول",
      position: "CEO and founder",
      avatar: kamal,
    },
    {
      name: "ابراهيم جمعة",
      position: "Full-stack Developer",
      avatar: luffy,
    },
    {
      name: "نور ابو ناموس",
      position: "UI/UX",
      avatar: noor,
    },
    {
      name: "الاء كامل",
      position: "App Developer",
      avatar: alaa,
    },
    {
      name: "محمد عايش",
      position: "Back-end developer",
      avatar: moh_ayesh,
    },
    {
      name: "احمد رحيم",
      position: "Front-end Developer",
      avatar: ahmed,
    },
    {
      name: "",
      position: "",
      avatar: "",
    },
    {
      name: "",
      position: "",
      avatar: "",
    },
  ];

  return (
    <section className="bowl_team">
      <div className=" title_techs">
        <span>بعض اعضاء الفريق</span>
      </div>

      <div className="team_list">
        {Team.map(({ name, avatar, position }, i) => {
          return (
            <div key={i} className="line_team">
              <div className="bowl_avatar_team">
                <img src={avatar} alt={name} />
              </div>
              <span className="name">{name}</span>
              <span>{position}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurTeam;
