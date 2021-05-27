import React, { useContext } from "react";
import { MyContext } from "../utils/utils";
import DetailCard from "./DetailCard";
import DetailContent from "./DetailContent";

function Detail() {
  const { bigCard } = useContext(MyContext);
  return (
    <>
      {bigCard.index !== undefined && (
        <section className="detail">
          <DetailCard />
          <DetailContent />
        </section>
      )}
    </>
  );
}

export default Detail;
