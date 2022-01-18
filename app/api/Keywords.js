import Firebase from '../config/Firebase';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


export default async function ProfilePicture(skillsSelected) {
    const db = getFirestore(Firebase);
    const auth = getAuth(Firebase);
    try {
        const docRef = await await setDoc(doc(db, `users/${auth.currentUser.uid}`), {
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
            profilePicture: auth.currentUser.photoURL,
            keywords: skillsSelected
        });
        return docRef;

    } catch (e) {
        console.log('here')
        return { error: 'error' }
    }
}