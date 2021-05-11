
export class ApiResponse {
    status: number;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
    data: any;

    constructor() {
        // why zero?  So you know if your fake response was initialized properly
        this.status = 0;
        this.method = 'GET';
        
    }
}