import axios from "axios";
import Datastorage from "./Handler.js";
const data = new Datastorage();
async function FetchData() {
    try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=54.9046&longitude=-1.3822&current=apparent_temperature&models=ukmo_seamless', { timeout: 1300 });
        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.code === 'ECONNABORTED') {
                console.log("Request timed out");
            }
            else {
                console.log('Network Error:', error.message);
            }
        }
        else {
            console.log('Unexpected error:', error);
        }
        throw error;
    }
}
FetchData().then(obj => console.log(obj)).catch(console.error);
//# sourceMappingURL=FetchData.js.map