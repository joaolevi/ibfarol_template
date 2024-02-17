import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import PerfilSidebar, { SidebarItem } from '../components/PerfilSidebar';
import { db } from "../utils/firebaseSetup"
import useAuth from "../hooks/useAuth";
import DadosInscricaoEncibaf from '../components/DadosInscricaoEcibaf';
import GeradorLinks from '../components/GeradorLinks';
import { BookText, LogOutIcon, Receipt } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { getAuth, signOut } from 'firebase/auth';

const Perfil = () => {
  const navigate = useNavigate(); // Utilize o useNavigate para navegação
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useAuth()
  const [docSnap, setDocSnap] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) {
          // Redireciona para a página de login se o usuário não estiver autenticado
          console.log("Sem usuário logado")
          navigate('/login');
          return;
        }

        const docRef = doc(db, "TesteForm", user.email);
        const fetchedDocSnap  = await getDoc(docRef);
        
        if (fetchedDocSnap .exists()) {
          setDocSnap(fetchedDocSnap);
        } else {
          // doc.data() will be undefined in this case
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
      navigate('/login');
      toast.success('Saiu da conta com sucesso');
    }).catch((error) => {
      toast.error('Erro ao sair da conta');
    });
  }

  return (
    <main style={{ display: 'flex' }}>
      {/* Barra lateral */}
      <PerfilSidebar userEmail={user ? user.email : null}>
        <SidebarItem icon={<BookText />} text="Inscrição" active={activeTab === 0} onClick={() => setActiveTab(0)} />
        <SidebarItem icon={<Receipt />} text="Pagamento" active={activeTab === 1} onClick={() => setActiveTab(1)} />
        <hr className="my-3" />
        <SidebarItem icon={<LogOutIcon />} text="Sair" onClick={handleLogout} />
      </PerfilSidebar>
      
      <div className="h-full w-full mb-10 pr-10 pl-2 max-w-[1900px]">
        {activeTab === 0 && <DadosInscricaoEncibaf docSnap={docSnap} />}
        {activeTab === 1 && <GeradorLinks docSnap={docSnap} />}
      </div>
    </main>
  );
};

export default Perfil;
