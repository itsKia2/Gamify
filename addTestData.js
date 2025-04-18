// addTestData.js
import { db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';

async function addTestData() {
  try {
    const docRef = await addDoc(collection(db, "testEvents"), {
      title: "Gamify Test Event",
      description: "Testing Firestore connection from VSCode",
      startTime: "2025-04-20T10:00:00Z",
      endTime: "2025-04-20T12:00:00Z",
      ownerId: "uidTest123",
      completed: false
    });
    console.log("✅ Document written with ID:", docRef.id);
  } catch (error) {
    console.error("❌ Error adding document:", error);
  }
}

addTestData();
