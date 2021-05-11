import { ApiResponse } from "./ApiResponse";

export function getCollection(id: string) {
    // generate a collection based upon the id
    let response = new ApiResponse();
    response.status = 200;
    response.data = "";
    // wait amount of time for response

    // return a promise with the API response object
    return Promise.resolve(response);
}