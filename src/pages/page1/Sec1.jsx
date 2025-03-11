import "../../style/Sec1.css";
import logoBarca from "../../assets/logoBarca.webp";
export default function Sec1() {
  return (
    <div className="sec1 col-12 d-flex justify-content-evenly align-items-end g-3  text-warning text-center">
      <div className="col-4 text-start d-flex flex-column justify-content-center align-items-start gap-3">
        <h1>Barcelona</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi id
          possimus ipsa perferendis, magni ratione quisquam doloribus tenetur
          blanditiis, animi totam. Tenetur fugiat odit animi eveniet id vitae
          beatae iusto.
        </p>
        <a href="#"> visite</a>
        <button type="button" className="btn btn-warning">
          Read More{" "}
        </button>
      </div>
      <div className="col-4">
        <img src={logoBarca} alt="" srcset="" />
      </div>
    </div>
  );
}
