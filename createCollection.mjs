import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, Timestamp, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'gamify-cs320.firebaseapp.com',
    projectId: 'gamify-cs320',
    storageBucket: 'gamify-cs320.appspot.com',
    messagingSenderId: '641481633457',
    appId: '1:641481633457:web:48a91983215ec882a5fc90',
    measurementId: 'G-RT0P353P49',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedExistingUser() {
    try {
        const userId = 'hqbb3FUjX6LLjMKAnqb2';
        const userRef = doc(db, 'users', userId);

        // Add user-level assignments
        await addDoc(collection(userRef, 'assignments'), {
            title: 'Draft project outline',
            description: 'Initial plan for app structure',
            dueDate: Timestamp.fromDate(new Date('2025-04-23')),
            calendarEventId: 'event001',
            completed: false,
        });

        // Add user-level calendar event
        await addDoc(collection(userRef, 'calendarEvents'), {
            title: 'Team Brainstorm',
            type: 'custom',
            startTime: Timestamp.fromDate(new Date('2025-04-20T16:00:00')),
            endTime: Timestamp.fromDate(new Date('2025-04-20T17:00:00')),
            repeat: 'none',
            colorTag: 'green',
        });

        // Add a new course under the user
        await addDoc(collection(userRef, 'courses'), {
            onboardingComplete: true,
            classes: [
                {
                    class_code: 'COMPSCI320',
                    name: 'Introduction to Programming',
                    location: 'Computer Science Building, UMass Amherst',
                },
                {
                    name: 'Linear Algebra',
                    location: 'Lederle Graduate Research Center',
                },
            ],
        });

        console.log('Existing user updated and course subcollection added!');
    } catch (e) {
        console.error('Error updating Firestore: ', e);
    }
}

seedExistingUser();
