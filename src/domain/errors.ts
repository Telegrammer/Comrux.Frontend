

export class DomainError extends Error {}



export class InvalidUuidError extends DomainError {}
export class InvalidPhoneError extends DomainError {}
export class InvalidEmailError extends DomainError {}
export class InvalidPassedDateError extends DomainError {}
export class InvalidNameError extends DomainError {}
export class InvalidPasswordError extends DomainError {}