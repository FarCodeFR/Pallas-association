export type PartnerType = {
  id: number;
  image: string;
  alt: string;
};

interface PartnerCarouselProps {
  partnerImages: PartnerType[];
  ariaLabel: string;
}
