// interfaces/index.ts

export interface CardProps {
  // Add more props later
  title: string;
  imageUrl: string;
  price: number;
}

export interface ButtonProps {
  // Add more props later
  label: string;
  onClick: () => void;
}
