interface IOptions {
	value: string,
	label: string
}

export interface ISelect {
	label: string
	name: string,
	value: number | string | undefined,
	options: IOptions[]
	required?: boolean,
	control: any
}

//

export interface IInputText {
	type: 'text' | 'number' | 'tel' | 'email' | 'password',
	label: string
	name: string,
	value: number | string | undefined,
	placeholder?: string
	required?: boolean,
	control: any,
	text?: string,
	plaintext?: boolean,
	readOnly?: boolean
}

//

export interface IInputCheck {
	type: 'checkbox' | 'radio',
	label: string,
	name: string,
	value: number | string | undefined,
	options: IOptions[],
	required?: boolean,
	control: any
}

//

export interface IInputDate {
	type: 'date' |'datetime',
	label: string,
	name: string,
	value: string | undefined,
	required?: boolean
}

//

export interface IInputFile {
	type: 'file',
	label: string,
	name: string,
	multiply?: boolean
	required?: boolean
	control: any
}

//

export interface ITextarea {
	label: string,
	name: string,
	value: string | undefined,
	placeholder: string,
	maxlength: number
	required?: boolean
}
