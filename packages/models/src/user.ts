import {collection, getFirestore} from 'firebase/firestore';
import type {DocumentData, QueryDocumentSnapshot} from 'firebase/firestore';

export interface User {
  id: string;
  email?: string;
  name?: string;
}

const USERS_COLLECTION = 'users';

const converter = {
  toFirestore: (user: User): DocumentData => ({
    name: user.name,
    email: user.email,
  }),
  fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>): User => {
    const data = snapshot.data();

    return {
      id: snapshot.id,
      name: data.name,
      email: data.email,
    };
  },
};

const db = getFirestore();

export const users = collection(db, USERS_COLLECTION).withConverter(converter);
