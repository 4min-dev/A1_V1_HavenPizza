import { useMemo } from "react"

export const usePaginate = (totalCardsLength,currPage) => {
  return useMemo(() => {
    const result = []
    for(let i = 1; i<totalCardsLength+1; i++) {
        result.push(i)
    }
    return result
   },[totalCardsLength,currPage])
}