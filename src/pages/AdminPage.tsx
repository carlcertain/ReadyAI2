// src/pages/AdminPage.tsx
import React, { useEffect, useState } from "react";
import { auth, db } from "../middleware/firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from "firebase/auth";
import { doc, getDoc, collection, getDocs, setDoc } from "firebase/firestore";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // log in with google
  const UserLogin = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const userCred = await signInWithPopup(auth, provider);

        // Save user info to Firestore (only on first signup)
        await setDoc(
            doc(db, "users", userCred.user.uid),
            {
            email: userCred.user.email,
            createdAt: new Date().toISOString(),
            provider: "google",
            role: "user"
            },
            { merge: true } // won't overwrite existing data
        );

        alert("Sign-in successful.");

        // refresh whole page after sign in
        setTimeout(() => {
          window.location.reload();
        }, 200);

        } catch (err: unknown) {
        if (err instanceof Error) {
             alert(err.message);
            // Refresh on error. If user already in DB, above will throw
            // setTimeout(() => {
            //   window.location.reload();
            // }, 200);
        } else {
            alert("Google sign-in failed.");
        }
      }
  }; 

  useEffect(() => {  
    // check for local user sign in
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          // Fetch user role from Firestore
          const userRef = doc(db, "users", currentUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            const userRole = userData.role || null;
            setRole(userRole);

            // If admin, fetch data
            if (userRole === "admin") {
              try {
                const colRef = collection(db, "referrals");
                const snapshot = await getDocs(colRef);
                const items = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
                setData(items);
              } catch (err: any) {
                setError("Access denied by Firestore rules.");
              }
            }
          } else {
            setError("No user found in database.");
          }
        } catch (err: any) {
          setError("Error fetching user role: " + err.message);
        }
      } else {
        setRole(null); // signed out
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
        {/* Abstract background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-10 md:pt-24 md:pb-14">
            <div className="text-center">
              <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">ADMIN PAGE</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-40 mt-20 text-lg tracking-widest">
          
          {loading && <p>Loading...</p>}

          {!loading && !user && 
            <>
              <p>Welcome to the Admin's Page</p>
              <p>Please sign in to continue.</p>
               <button type="button" onClick={UserLogin} className="mt-12 bg-blue-500 hover:bg-blue-700 text-white font-bold w-fit py-2 px-4 rounded-md">
                Sign in with Google
              </button>              
            </>
          }

          {!loading && error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && user && role !== "admin" && (
            <p>Access denied. Admins only.</p>
          )}

          {!loading && user && role === "admin" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Current Referrals</h2>
            {data.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                        Referral Code
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-left">
                    {data.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-3 text-sm text-gray-900 border-b">
                          {item.referralCode || "-"}
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-900 border-b">
                          {item.email || "-"}
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-900 border-b">
                          {item.createdAt.toLocaleString() || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No data available.</p>
            )}
          </>
        )}

        </div>
      </div>
    </div>
  );
}