import Image from "next/image";
import NavLink from "next/link";
import office from "../app/data/office.json";

function Office() {
  return (
    <>
      <div className="container-team">
        {office.map((el) => {
          return (
            <figure key={el.id} className="container-office">
              <picture>
                <Image src={el.image} alt={el.alt} width={100} height={100} />
              </picture>
              <figcaption>
                <h3>{el.name}</h3>
                <p>{el.post}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <p id="info-render">
        Compte-rendu des ASSEMBLÉE GÉNÉRALE
        <NavLink
          target="_blank"
          href="https://drive.google.com/drive/folders/1gGjtHR9XAz7pwWGGRNM2CB8iaj0H2VGi"
        >
          <span style={{ color: "red" }}> ici</span>
        </NavLink>
      </p>
    </>
  );
}

export default Office;
