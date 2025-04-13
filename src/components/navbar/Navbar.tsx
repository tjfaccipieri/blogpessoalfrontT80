import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert('O Usuário foi desconectado com sucesso!');
    navigate('/');
  }
  return (
    <>
      <div
        className="w-full flex justify-center py-4
                   bg-indigo-900 text-white"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home">Blog Pessoal</Link>

          <div className="flex gap-4">
            <Link to='/postagens'>Postagens</Link> 
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema </Link>
            
            Perfil 
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
