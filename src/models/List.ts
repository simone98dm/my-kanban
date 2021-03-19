import { ICard } from "./Card";

export interface IList {
  name: string;
  id: number;
  list: ICard[];
}
