import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import PerfilSidebar, { SidebarItem } from '../components/PerfilSidebar';
import { db } from "../utils/firebaseSetup"
import useAuth from "../hooks/useAuth";
import ListaEncibaf from '../components/ListaEncibaf';
import { BookText, LogOutIcon, Receipt } from 'lucide-react';
import ListaPagamentos from '../components/ListaPagamentos';
import { getAuth, signOut } from 'firebase/auth';


const Admin = () => {
  const navigate = useNavigate(); // Utilize o useNavigate para navegação
  const [activeTab, setActiveTab] = useState(0);
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
  }, [navigate, user]);

  const handleLogout = async () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate('/');
      toast.success('Saiu da conta com sucesso');
    }).catch((error) => {
      toast.error('Erro ao sair da conta');
    });
  }

  return (
    <main style={{ display: 'flex' }}>
      <PerfilSidebar userEmail={user ? user.email : null}>
        <SidebarItem icon={<BookText />} text="Inscrições ENCIBAF" active={activeTab === 0} onClick={() => setActiveTab(0)} />
        <SidebarItem icon={<Receipt />} text="Pagamentos" active={activeTab === 1} onClick={() => setActiveTab(1)} />
        <hr className="my-3" />
        <SidebarItem icon={<LogOutIcon />} text="Sair" onClick={handleLogout} />
      </PerfilSidebar>
      <div className="h-full w-full mb-10 pr-10 pl-2 max-w-[1900px]">
        {activeTab === 0 && docs && docs.map((doc) => (
        <div 
          className="border border-gray-300 rounded p-4 my-4 shadow-md overflow-auto bg-[#F6F7FB]"
          key={doc.id}>
          <button
            className="text-sm"
            onClick={() => toggleItem(doc.id)}><strong>{doc.husbandName}</strong> & <strong>{doc.wifeName}</strong></button>
          {expandedItems[doc.id] && <ListaEncibaf docSnap={doc} />}
        </div>
        ))}
        {activeTab === 1 && docs && docs.map((doc) => (
        <div 
          className="border border-gray-300 rounded p-4 my-4 shadow-md overflow-auto bg-[#F6F7FB]"
          key={doc.id}>
          <button
            className="text-sm"
            onClick={() => toggleItem(doc.id)}><strong>{doc.husbandName}</strong> & <strong>{doc.wifeName}</strong></button>
          {expandedItems[doc.id] && <ListaPagamentos docSnap={doc} />}
        </div>
        ))}
      </div>
  </main>
  );
};

export default Admin;
