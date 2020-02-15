export class EmployeeOutput<T> {
	status: string;
	data: T;
}

export class Employee {
	id: number;
	employee_name: string;
	employee_salary: string;
	employee_age: string;
	profile_image?: string;
	isActive: boolean;
}


export class DeleteOutput {
	status: string;
	message: string;
}






