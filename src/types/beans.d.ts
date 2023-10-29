/** @format */

type BeansNation = "USA" | "Vietnam" | "Kenya" | "Indonesia" | "Brazil";

type BeansKind = "Arabica" | "Robusta" | "Liberica";

type BeansTaste = "Sweet" | "Salty" | "Sour" | "Nutty";

type BeansType = `${BeansNation}_${BeansKind}`;

export type { BeansNation, BeansTaste, BeansType, BeansType };
