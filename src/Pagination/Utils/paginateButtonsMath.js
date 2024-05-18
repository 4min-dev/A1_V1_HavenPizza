export const paginateButtonsMath = (totalCardsLength,limitCards) => {
    return Math.ceil(totalCardsLength / limitCards)
}