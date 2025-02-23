export type CarModel = {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
  title: string;
  description: string;
  model_features: {
    name: string;
    description: string;
    image: string;
  }[];
  model_highlights: {
    title: string;
    content: string;
    image: string;
  }[];
};

export type NavItem = {
  label: string;
  route: string;
};

export type NavBarProps = {
  navItems: NavItem[];
};
export type Car = {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
};
export type CarDetailsProps = {
  photo: string;
  name: string;
  title: string;
  description: string;
};
export type Feature = {
  name: string;
  description: string;
  image: string;
};

export type CarFeaturesProps = {
  features: Feature[];
};
