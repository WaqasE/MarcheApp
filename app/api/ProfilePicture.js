import Firebase from '../config/Firebase';
import { getAuth, updateProfile } from "firebase/auth";

export default async function ProfilePicture(secure_url) {
    const auth = getAuth(Firebase);
    try {
        if (auth) {
            await updateProfile(auth.currentUser, { photoURL: secure_url })
            return auth.currentUser;
        }
        else {
            return ({ error: 'error!' });
        }
    } catch (error) {
        return ({ error: 'error!' });
    }
}