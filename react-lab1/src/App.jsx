import StudentCard from './StudentCard';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#f3eae0', 
      minHeight: '100vh', 
      padding: '40px', 
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center' // Keeps it centered horizontally at the top
    }}>
      <h1 style={{ marginBottom: '24px', color: '#4a2c2a' }}>Student Profiles</h1>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <StudentCard 
          name="Izuku Midoriya" 
          course="BS Hero Training" 
          section="BSCS 1-A" 
        />
        <StudentCard 
          name="Katsuki Bakugo" 
          course="BS Support Gear Engineering" 
          section="BSCS 2-A" 
        />
        <StudentCard 
          name="Shoto Todoroki" 
          course="BS Management in Hero Studies" 
          section="BSCS 3-A" 
        />
      </div>
    </div>
  );
}

export default App;