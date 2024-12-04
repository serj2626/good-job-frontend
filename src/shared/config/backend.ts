// add hook to config   

import { useRuntimeConfig } from "#app";

export const CURRENT_MONTH = new Date().getMonth() + 1;
export const CURRENT_YEAR = new Date().getFullYear();

export const MONTHS = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];


const config = useRuntimeConfig();
export const backendBaseUrl = config.public.apiUrl;
