import { PartnerType } from "@/types/Partner";
import Image from "next/image";
import partnerImage from "../app/data/partner.json";
function Partner() {
  // Function pour alterner entre 2 ou 3 images par ligne
  const groupImages = (images: PartnerType[]): PartnerType[][] => {
    const result: PartnerType[][] = [];
    let i = 0;
    let toggle = true;
    while (i < images.length) {
      const count = toggle ? 3 : 2;
      result.push(images.slice(i, i + count));
      i += count;
      toggle = !toggle;
    }
    return result;
  };
  return (
    <div className="partner-container">
      {groupImages(partnerImage).map((group, index) => (
        <ul key={index} className="partner-row">
          {group.map((el) => (
            <li aria-label="logo" key={el.id} className="partner-item">
              <Image width={100} height={100} src={el.image} alt={el.alt} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Partner;
