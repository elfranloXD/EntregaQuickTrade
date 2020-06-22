export interface IProductoHog{
    "id": string,
    "nombre": string,
    "descripcion": string,
    "precio": number,
    "claveUsuario": string,
    "categoria": string
}

export interface IProductoTec extends IProductoHog{ 
    "estado": string,
}


export interface IProductoInm extends IProductoHog{
    "localidad": string,
    "estado": string,
    "metros": number,
    "habitaciones": number,
    "banyos": number
}


export interface IProductoMot extends IProductoHog{
    "estado": string,
    "km": number,
    "anyo": number
}

export interface IProductoKey extends IProductoHog{
    "key": string,
}