import { useMemo } from "react"

export const useSortedCards = (sortQuery,cardsData,categoryFilter) => {
    const sorted = useMemo(() => {
        if (!categoryFilter && !sortQuery) {
            return cardsData
        } else if (categoryFilter === 'I1') {
            return cardsData.filter(item => item.type === 'I1');
        } else if (categoryFilter === 'I2') {
            return cardsData.filter(item => item.type === 'I2');
        } else if (categoryFilter === 'veg') {
            return cardsData.filter(item => item.veg === true);
        }
        
        
        return cardsData.sort((a, b) => {
            if (!isNaN(a[sortQuery]) && !isNaN(b[sortQuery])) {
                console.log(cardsData)
                return a[sortQuery] - b[sortQuery];
            } else {
                console.log('b')
                return a[sortQuery].localeCompare(b[sortQuery]);
            }
        });
    }, [cardsData, sortQuery, categoryFilter]);
return sorted    
}
export const useFilterCards = (sortQuery,searchQuery,cardsData,categoryFilter) => {
    const sortedCards = useSortedCards(sortQuery,cardsData,categoryFilter)
    const sortAndSearched = useMemo(() => {
        if(!searchQuery) {
            return sortedCards
        }
        return sortedCards.filter((el) => el.name.toLowerCase().includes(searchQuery.toLowerCase()))
    },[searchQuery,cardsData])
    return sortAndSearched
}