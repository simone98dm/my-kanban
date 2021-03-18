import { IBadge } from "./Badge";

export interface ICard {
  title: string;
  description: string;
  badges?: IBadge[];
}
