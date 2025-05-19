import Image from "next/image";
import NavLink from "next/link";
import office from "../app/data/office.json";

function Office() {
  return (
    <>
      {office.map((el) => {
        return (
          <figure key={el.id} className="container-office">
            <Image src={el.image} alt={el.alt} width={100} height={100} />
            <figcaption>
              <h3>{el.name}</h3>
              <p>{el.post}</p>
            </figcaption>
          </figure>
        );
      })}
      <p id="info-render">
        Compte-rendu des ASSEMBLÉE GÉNÉRALE
        <NavLink href="">
          <span style={{ color: "red" }}> ici</span>
        </NavLink>
      </p>
    </>
  );
}

export default Office;
