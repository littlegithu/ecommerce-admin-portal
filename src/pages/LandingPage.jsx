export default function LandingPage() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',            // takes full height of parent
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    }}>
      {/* VIDEO BACKGROUND */}
      <video
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* CENTERED CONTENT */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        padding: '1rem',
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Corteiz Admin Portal</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Manage your products, update prices and track inventory.</p>
        <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Staff Only</div>
      </div>
    </div>
  );
}