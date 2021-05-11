/**
 *	Checks the HTTP response from the API.
 *  This ensures that no null values, undefined values, or undefined/empty data is being returned.
 *  Prevents a fatal crash of the application when data does not return expectedly.
 *  Error handling must still be dealt with separately  
 *  @param	{any}	response
 *  @returns	{boolean}	details about the response
 **/
 export function CheckHttpResponse(response: any): boolean {
	// check that the response is not undefined (token expiration, server error, etc)
	if(response === undefined && response === null) {
		console.error("Response is null or undefined");
		return false;
	}
	
	// check that the status returned is not undefined
	if(response.status === undefined && response === null) {
		console.error("Response status is null or undefined");
		return false;
	}
			
	// check that the response is in valid range
	if(response.status < 200 && response.status > 300) {
		console.error("Failed response code: " + response.status);
		return false;
	}

	if(response.data === undefined && response.status !== 204) {
		console.error("Response data is undefined");
		return false;
	}

	if(response.data === "" && response.status !== 204) {
		console.error("Response data is empty");
		return false;
	}

	return true;
		
}