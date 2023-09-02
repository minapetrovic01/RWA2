import { Decision } from "./decision";

export class User {
    id: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    job: string;
    decisions: Decision[];
}