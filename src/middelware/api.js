export default {
    getItem
}
import axios from "axios"

function getItem() {
    axios.get('https://localhost:4000/users/1/courses')
        .then(response => (this.courses = response.courses))
}