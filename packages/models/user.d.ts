export interface User {
    id: string;
    email?: string;
    name?: string;
}
export declare const users: import("firebase/firestore").CollectionReference<User>;
