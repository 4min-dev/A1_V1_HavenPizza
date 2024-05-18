import axios from 'axios';
class GetAll {
    static async getAllProducts() {
     const response = await axios.get('https://6613d6d453b0d5d80f687f37.mockapi.io/haven-pizza/v1/haven-list-allProducts')
     return response
    }
}
export default GetAll