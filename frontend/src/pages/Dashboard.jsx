import { supabase } from '../lib/supabaseClient'
import './Dashboard.css'

export default function Dashboard() {
  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>Banda Ágape</h1>
        <button onClick={handleLogout}>Sair</button>
      </nav>
      <div className="content">
        <h2>Bem-vindo ao Dashboard!</h2>
        <p>Aqui você vai gerenciar escalas, cifras e muito mais.</p>
      </div>
    </div>
  )
}