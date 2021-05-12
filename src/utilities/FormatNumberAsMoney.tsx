/**
 * Accepts a number and returns a formatted string
 * If null, shows ERR and the value passed to the function
 * @param {number | null} value 	// the value you wish to format
 * @returns {string}				// the formatted string as a dollar amount
 */
export function FormatNumberAsMoney(value: number | null) {
	if(value !== null && value !== undefined && !isNaN(value)) {
		let _value = Number(value);
		return '$' + _value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	}
	return "ERR: " + value;
}
