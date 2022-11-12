import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import diseaseStyles from "./disease.module.css";
import { getDiseasesById } from "../../actions/diseaseactions";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Styles from "../Home/home.module.css";

export default function DiseaseInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.diseasereducer.data);
  useEffect(() => {
    dispatch(getDiseasesById(id));
  }, []);
  console.log(data);
  return (
    <>
      <Navbar styles={Styles} />
      <div
        id={diseaseStyles["cont"]}
        style={{ padding: "20px 30px", lineHeight: "200%" }}
      >
        <p className={diseaseStyles["main"]}>
          <strong>{data && data.name}</strong>
        </p>

        {data && <img src={`/${data.image}`} />}
        <p>
          <strong>Symptoms</strong>
        </p>
        <ul>
          {data && data.symptoms?.length > 0
            ? data.symptoms.split("\\n").map((ele) => {
                return <li>{ele}</li>;
              })
            : "None"}
        </ul>
        <p>
          <strong>Medicines and cure</strong>
        </p>
        <ol>
          {data && data.cure?.length > 0
            ? data.cure.split("\\n").map((ele) => {
                return <li>{ele}</li>;
              })
            : "None"}
        </ol>

        <hr className={diseaseStyles["design"]} />
      </div>
      <Footer styles={Styles} />
    </>
  );
}
