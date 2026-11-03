export interface Account {
    id: string;
    name: string;
    username: string;
    password: string;
    createdAt: number;

}

export type AccountInput = Omit<Account, 'id' | 'createdAt'>;
