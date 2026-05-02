export interface IAuth{
    id: number
    login: string,
    parol: string,
    ban: boolean
}

export const AUTHDATA: IAuth[] = [
   {
        id: 1,
        ban: false,
        login : 'admin',
        parol: 'admin123'
    },

]