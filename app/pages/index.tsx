export default function Home() {
    return <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Vercel Minimal Reproduction with Autumn
        </h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
            Go to <code style={{ backgroundColor: '#f0f0f0', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>/api/autumn/[...all].tsx</code>, to see the Autumn handler.
        </p>
        <div style={{
            padding: '0.5rem 1.5rem 0.5rem 1.5rem',
            backgroundColor: '#fff3e0',
            border: '1px solid #ffb74d',
            borderRadius: '4px',
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
        }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM13.2 18H10.8V15.6H13.2V18ZM13.2 13.2H10.8V6H13.2V13.2Z" fill="#f57c00"/>
            </svg>
            <span style={{ color: '#e65100', fontSize: '0.85rem', lineHeight: '1.4' }}>
                Please note: The exposed Autumn "secret key" is a test mode key, intended for demonstration purposes only. This key is practically useless and will be automatically revoked.
            </span>
        </div>
    </div>
}