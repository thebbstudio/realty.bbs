interface IOptions {
	value: string,
	label: string
}

export interface ISelect {
	label: string
	name: string,
	value: string,
	options: IOptions[]
	required: boolean,
	control: any
}

//

export interface IInputText {
	type: 'text' | 'number' | 'tel' | 'email' | 'password',
	label: string
	name: string,
	value: string,
	placeholder: string
	required: boolean,
	control: any,
	text?: string
}

//

export interface IInputCheck {
	type: 'checkbox' | 'radio',
	label: string,
	name: string,
	value: string,
	options: IOptions[],
	required: boolean,
	control: any
}

//

export interface IInputDate {
	type: 'date' |'datetime',
	label: string,
	name: string,
	value: string,
	required: boolean
}

//

export interface IInputFile {
	type: 'file',
	label: string,
	name: string,
	multiply: boolean
	required: boolean
}

//

export interface ITextarea {
	label: string,
	name: string,
	value: string,
	placeholder: string,
	maxlength: number
	required: boolean
}
