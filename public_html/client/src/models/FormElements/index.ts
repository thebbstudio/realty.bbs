type numberBool = '1' | '0'

//

interface ISelectOptions {
	value: string,
	label: string
}

export interface ISelect {
	typeField : 'select',
	label: string
	name: string,
	options: ISelectOptions[]
	required: numberBool
}

//

export interface IInputText {
  typeField : 'inputText',
	type: 'text' | 'number' | 'tel' | 'email' | 'password',
	label: string
	name: string,
	placeholder: string
	required: numberBool
}

//

export interface IInputCheck {
	typeField : 'inputCheck',
	type: 'checkbox' | 'radio',
	label: string,
	name: string,
	options: string[],
	required: numberBool
}

//

export interface IInputDate {
	typeField : 'inputCheck',
	type: 'date' |'datetime',
	label: string,
	name: string,
	required: numberBool
}

//

export interface IInputFile {
	typeField : 'inputFile',
	type: 'file',
	label: string,
	name: string,
	multiply: numberBool
	required: numberBool
}

//

export interface ITextarea {
	typeField : 'textarea',
	label: string,
	name: string,
	placeholder: string,
	maxlength: number
	required: numberBool
}
