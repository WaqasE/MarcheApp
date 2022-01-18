import Firebase from '../config/Firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default async function Join(email, password, name) {
    const auth = getAuth(Firebase);
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        if (res) {
            await updateProfile(auth.currentUser, { displayName: name })
            return auth.currentUser;
        }
        else {
            return ({ error: 'Email already exists!' });
        }
    } catch (error) {
        return ({ error: 'Email already exists!' });
    }
}