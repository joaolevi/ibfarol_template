// Perfil.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import PerfilSidebar from '../components/PerfilSidebar';
import { db } from "../utils/firebaseSetup"
import useAuth from "../hooks/useAuth";
import ListaEncibaf from '../components/ListaEncibaf';

const Admin = () => {
  const navigate = useNavigate(); // Utilize o useNavigate para navegação
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth()
  const [docs, setDocsSnap] = useState([]); 
  const [expandedItems, setExpandedItems] = useState({}); 

  const toggleItem = (id) => {
    setExpandedItems({
      ...expandedItems,
      [id]: !expandedItems[id],
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) {
          // Redireciona para a página de login se o usuário não estiver autenticado
          navigate('/login');
          return;
        }

        const docUserRole = doc(db, "UserRoles", user.email);
        const fetchedUserRole  = await getDoc(docUserRole);
        
        if (fetchedUserRole .exists()) {
          if (fetchedUserRole.data().role !== 'admin') {
            navigate('/unauthorized');
            return;
          }
          const querySnapshot = await getDocs(collection(db, "TesteForm"));
          const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setDocsSnap(documents);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error('Erro ao obter dados do Firestore:', error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-[280px_1fr] mt-10">
      <PerfilSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="h-full w-full mb-10 pr-10 pl-2 max-w-[1900px]">
        {docs && docs.map((doc) => (
        <div key={doc.id}>
          <button onClick={() => toggleItem(doc.id)}>{doc.id}</button>
          {expandedItems[doc.id] && <ListaEncibaf docSnap={doc} />}
        </div>
        ))}
      </div>
  </main>
  );
};

export default Admin;
