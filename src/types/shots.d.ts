/** @format */

import type { BeansType } from "@/types/beans";

interface ICoffeeShots {
  beans: Record<BeansType, number>[]; // 2개 이상 섞이면 블렌디드로 간주
}

export type { ICoffeeShots };
