
export class ApiResponse {
    status: number;
	url: string;
    method: 'get' | 'post' | 'put' | 'path' | 'delete' | 'options';
    data: any;

    constructor() {
        // why zero?  So you know if your fake response was initialized properly
        this.status = 0;
        this.method = 'get';
		this.url = "";

        
    }
}