import axios from "axios";
//import queryString from "query-string";

const getInstance = () => {
    const instance = axios.create({
        baseURL: `http://localhost:3001`,
        headers: {"Access-Control-Allow-Origin": "*"},
        timeout: 30000,
    });
    return instance;
};

console.log('http://localhost:3001')
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ScheduleData: {
        fetchCustomerSchedulesDetails: () => getInstance().get('customer-id/schedules')
    },
    CustomerDetails: {
        fetchCustomerDetails: () => getInstance().get('customer-id/:id')
    }
}
