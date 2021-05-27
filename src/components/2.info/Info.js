import React, { useContext } from "react";
import { MyContext } from "../utils/utils";
import BigCard from "./BigCard";
import InfoItems from "./InfoItems";

export default function Info() {
  const { bigCard } = useContext(MyContext);
  return (
    <>
      {bigCard.index !== undefined && (
        <section className="detail">
          <div>
            <BigCard />
          </div>
          <InfoItems />
        </section>
      )}
    </>
  );
}
