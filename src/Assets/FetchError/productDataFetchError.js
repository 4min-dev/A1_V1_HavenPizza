import GetAll from "../Post/GetAll"

export const productDataFetchError = async(setErrorMessage,setLoading,setProductData) => {
    try {
        const response = await GetAll.getAllProducts()
        setProductData(response.data)
       }
       catch(e) {
        setErrorMessage(e.message)
       }
       finally {
        setLoading(false)
       }
}