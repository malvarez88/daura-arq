//change doc title
import { capitalizeFirstLetter } from "../utils/functions"

export const changeDocTitle = (location) => {
    const loc = capitalizeFirstLetter(location)
    return document.title = `D' Aura Arquitectura - ${loc} `
}