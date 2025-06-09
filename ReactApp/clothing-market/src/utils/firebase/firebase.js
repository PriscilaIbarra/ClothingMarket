import { initializeApp } from "firebase/app";
import { getAuth,
         signInWithRedirect,
         signInWithPopup,
         GoogleAuthProvider,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
          } from "firebase/auth";
import {
getFirestore,
doc,
getDoc,
setDoc,
collection,
writeBatch,
query,
getDocs
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSKR03ZQdC-HaAnv-ba5Jpv1c_Q0yEKiw",
  authDomain: "clothing-app-db-e0f06.firebaseapp.com",
  projectId: "clothing-app-db-e0f06",
  storageBucket: "clothing-app-db-e0f06.firebasestorage.app",
  messagingSenderId: "501292523749",
  appId: "1:501292523749:web:c4a747a1815eb3b970740c"
};


const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
 prompt:"select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = ()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth,googleProvider);


export const db = getFirestore();


export const addCollectionAndDocuments = async(collectionKey, objectsToAdd,field)=>{
 const collectionRef = collection(db,collectionKey);
 const batch = writeBatch(db);

 objectsToAdd.forEach((object)=>{
 const docRef = doc(collectionRef,object.title.toLowerCase());
 batch.set(docRef,object);
 });
 
 await batch.commit(); 
 console.log("done");
}

export const getCategoriesAndDocuments = async ()=>{

 const collectionRef = collection(db,'categories');
 const q = query(collectionRef);
 
 const querySnapshot = await getDocs(q);
 
 const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
    
    const { title , items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc; 
    
 },{});
 
 return categoryMap;

}



export const createUserDocumentFromAuth = async(userAuth, aditionalInformation={} )=>{
   
   if(!userAuth) return; 

   const userDocRef = doc(db,'users',userAuth.uid);
   
   console.log(userDocRef);
   
   const userSnapshot = await getDoc(userDocRef);
   
   console.log(userSnapshot);
   console.log(userSnapshot.exists());
   
   if(!userSnapshot.exists()){
     const {displayName, email} = userAuth;
     const createdAt = new Date();
      
      try {  
   	   await setDoc(userDocRef,{
			      displayName,
			      email,
			      createdAt,
			      ...aditionalInformation
	  		 })
   
          }
      catch(error){
             console.log("Error creating the user", error.message);
          }
     
   }
  
   
   return userDocRef;
   
}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{

   if(!email || !password) return;
   
   return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password)=>{

   if(!email || !password) return;
   
   return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async()=>await signOut(auth);

export const onAuthStateChangedListener = (callback)=>onAuthStateChanged(auth,callback)

