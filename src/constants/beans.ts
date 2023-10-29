/** @format */

import type { BeansTaste, BeansType } from "@/types/beans";

const BEANS_TYPE: EnumType<BeansType> = {
  USA_Arabica: "USA_Arabica",
  USA_Robusta: "USA_Robusta",
  USA_Liberica: "USA_Liberica",

  Vietnam_Arabica: "Vietnam_Arabica",
  Vietnam_Robusta: "Vietnam_Robusta",
  Vietnam_Liberica: "Vietnam_Liberica",

  Kenya_Arabica: "Kenya_Arabica",
  Kenya_Robusta: "Kenya_Robusta",
  Kenya_Liberica: "Kenya_Liberica",

  Indonesia_Arabica: "Indonesia_Arabica",
  Indonesia_Robusta: "Indonesia_Robusta",
  Indonesia_Liberica: "Indonesia_Liberica",

  Brazil_Arabica: "Brazil_Arabica",
  Brazil_Robusta: "Brazil_Robusta",
  Brazil_Liberica: "Brazil_Liberica",
};

const BEANS_TASTE_BY_TYPE: Record<BeansType, BeansTaste[]> = {
  USA_Arabica: ["Sweet", "Salty"],
  USA_Robusta: ["Sweet"],
  USA_Liberica: ["Sweet", "Sour"],

  Vietnam_Arabica: ["Nutty", "Sweet"],
  Vietnam_Robusta: ["Nutty", "Salty"],
  Vietnam_Liberica: ["Nutty", "Sour"],

  Kenya_Arabica: ["Salty", "Sweet"],
  Kenya_Robusta: ["Salty"],
  Kenya_Liberica: ["Salty", "Sour"],

  Indonesia_Arabica: ["Sweet", "Salty"],
  Indonesia_Liberica: ["Sweet", "Nutty"],
  Indonesia_Robusta: ["Sweet", "Sour"],

  Brazil_Arabica: ["Sour", "Sweet"],
  Brazil_Robusta: ["Sour", "Salty"],
  Brazil_Liberica: ["Sour"],
};

export { BEANS_TYPE, BEANS_TASTE_BY_TYPE };
