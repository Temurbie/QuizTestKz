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
   {
        id: 2,
        ban: false,
        login : 'Jasmina7',
        parol: 'jasmina45'
    },
    
       {
        id: 3,
        ban: false,
        login : 'Shermatova',
        parol: '4736sh'
    },
       {
        id: 4,
        ban: false,
        login : 'sunshine',
        parol: 'sun198'
    },

]