import React from 'react';

function App() {
  return (
    <div style={{
      padding: '50px',
      textAlign: 'center',
      fontFamily: 'Inter, Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#1e40af',
          marginBottom: '20px'
        }}>
          🚀 Luma MVP
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#64748b',
          marginBottom: '30px'
        }}>
          AI-powered sustainability regulations platform
        </p>
        
        <div style={{
          padding: '20px',
          backgroundColor: '#eff6ff',
          borderRadius: '8px',
          marginBottom: '30px'
        }}>
          <p style={{color: '#1e40af', margin: 0}}>
            ✅ Currently in pilot testing phase<br/>
            ✅ IFRS S1/S2 & GRI focused<br/>
            ✅ Multilingual support (EN/ES)
          </p>
        </div>
        
        <button style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#1e40af',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'not-allowed',
          opacity: '0.7'
        }}>
          Full Version Coming Soon
        </button>
        
        <p style={{
          marginTop: '30px',
          fontSize: '14px',
          color: '#94a3b8'
        }}>
          Testing in progress • Contact for early access
        </p>
      </div>
    </div>
  );
}

export default App;
