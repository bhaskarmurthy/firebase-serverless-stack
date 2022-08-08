import * as functions from 'firebase-functions';
import {addDoc} from 'firebase/firestore';
import {User, users} from 'models/user';

export default functions.auth
    .user()
    .onCreate(async ({uid, displayName, email}) => {
      console.debug('create user', uid);

      // create user document in users collection
      const user: User = {
        id: uid,
        name: displayName,
        email: email,
      };

      const userRef = await addDoc(users, user);
      return userRef;
    });
