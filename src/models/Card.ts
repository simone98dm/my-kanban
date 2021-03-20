import { IBadge } from "./Badge";

export interface ICard {
  id: number;
  title: string;
  description: string;
  badges?: IBadge[];
}
