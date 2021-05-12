import { CartSelection } from "./CartSelection";

export interface Cart {
    [key: string]: CartSelection;
}