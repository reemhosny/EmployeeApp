export interface Employee {
	status?:string;
	data:{
		id: number;
		employee_name: string;
		employee_salary: string;
		employee_age: string;
		profile_image?:	string;                                                          
	};
	password: string                                              
}
