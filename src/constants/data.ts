export interface DataType {
	clientsNumber: number,
	phone: string,
	email: string,
	facebook: string,
    tarifePage: string,
    galleryPage: string,
    phoneLink: string,
    facebookLink: string,
    emailLink: string,
}

export const redundantData: DataType  = {
    clientsNumber: 300,
    phone:"0712 345 678",
    email:"alin@gmail.com",
    facebook:"alin cotoban",
    tarifePage: "/tarife",
    galleryPage: "/galerie-foto",
    phoneLink:"0712345678",
    facebookLink: "",
    emailLink: ""
}