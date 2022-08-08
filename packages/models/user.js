"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const firestore_1 = require("firebase/firestore");
const USERS_COLLECTION = 'users';
const converter = {
    toFirestore: (user) => ({
        name: user.name,
        email: user.email,
    }),
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            name: data.name,
            email: data.email,
        };
    },
};
const db = (0, firestore_1.getFirestore)();
exports.users = (0, firestore_1.collection)(db, USERS_COLLECTION).withConverter(converter);
//# sourceMappingURL=user.js.map