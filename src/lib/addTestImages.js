import axios from "axios";

export const addTestImages = (data) => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
                data.setData(data.data.concat(response.data.map(elem => {
                    return {
                        height: 600,
                        width: 600,
                        id: elem.id + data.data.length,
                        name: elem.title,
                        sample_url: elem.url,
                        checked: false
                    }
                })));
            }
        )
}