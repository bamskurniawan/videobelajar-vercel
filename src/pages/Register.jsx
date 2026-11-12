
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import logo from '../assets/logo.jpg'
import googleLogo from '../assets/google.jpg'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const password = formData.get('password')
    const konfirmasiPassword = formData.get('konfirmasiPassword')

    if (password !== konfirmasiPassword) {
      alert('Konfirmasi kata sandi tidak sama!')
      return
    }

    const user = {
      nama: formData.get('nama'),
      email: formData.get('email'),
      kodeNegara: formData.get('kodeNegara'),
      nomorHP: formData.get('nomorHP'),
      password: password
    }

    localStorage.setItem('registeredUser', JSON.stringify(user))

    alert('Pendaftaran berhasil!')
  }

  return (
    <div className="auth-page">
      <header className="auth-navbar">
        <a href="/" className="auth-logo">
          <img src={logo} alt="VideoBelajar" />
        </a>
      </header>

      <main className="auth-main">
        <div className="auth-card">
          <h1>Pendaftaran Akun</h1>

          <p className="auth-subtitle">
            Yuk, daftarkan akunmu sekarang juga!
          </p>

          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Nama Lengkap <span>*</span></label>
              <input
                type="text"
                name="nama"
                required
              />
            </div>

            <div className="form-group">
              <label>E-Mail <span>*</span></label>
              <input
                type="email"
                name="email"
                required
              />
            </div>

            <div className="form-group">
              <label>No. Hp <span>*</span></label>

              
<div className="phone-wrapper">
  <div className="country-code">
    <span className="indonesia-flag">
      <span></span>
    </span>

    <select name="kodeNegara" defaultValue="+62">
      <option value="+62">+62</option>
      <option value="+60">+60</option>
      <option value="+65">+65</option>
    </select>
  </div>

  <input
    type="tel"
    name="nomorHP"
    required
  />
</div>

            </div>

            <div className="form-group">
              <label>Kata Sandi <span>*</span></label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Tampilkan atau sembunyikan kata sandi"
                >
                  {showPassword ? '◉' : '◉'}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Konfirmasi Kata Sandi <span>*</span></label>

              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="konfirmasiPassword"
                  required
                />

                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label="Tampilkan atau sembunyikan konfirmasi kata sandi"
                >
                  ◉
                </button>
              </div>
            </div>

            <div className="forgot-password">
              <Link to="/login">Lupa Password?</Link>
            </div>

            <button type="submit" className="auth-button">
              Daftar
            </button>

            <Link to="/login" className="auth-secondary-button">
              Masuk
            </Link>

            <div className="auth-divider">
              <span></span>
              <p>atau</p>
              <span></span>
            </div>

            <button
              type="button"
              className="google-button"
              onClick={() => alert('Login Google belum diaktifkan')}
            >
              <img
                src={googleLogo}
                alt="Google"
                className="google-icon"
              />
              <span>Daftar dengan Google</span>
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Register
