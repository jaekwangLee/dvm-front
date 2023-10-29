/** @format */

import { MilkTypes } from "./milk";
import type { ICoffeeShots } from "./shots";
import type { TasteType } from "./syrup";

interface ICoffee {
  name: string;
  shots: ICoffeeShots[];
  iced: boolean;
  taste: string;
  explain?: string;
  sugar?: number;
  syrup?: number;
}

interface ITastedCoffee extends ICoffee {
  tastedSyrup: TasteType[];
}

interface ICoffeeLatte extends ICoffee {
  milk: boolean;
  milkType?: MilkTypes;
  steam: boolean;
}

interface ITastedCoffeeLatte extends ICoffeeLatte {
  tastedSyrup: TasteType[];
}

export type { ICoffee, ITastedCoffee, ICoffeeLatte, ITastedCoffeeLatte };
