import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Carl Åberg - Full Stack Developer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #18181b 0%, #3f3f46 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
          Carl Åberg
        </div>
        <div style={{ fontSize: 42, color: '#a1a1aa' }}>
          Full Stack Developer
        </div>
        <div style={{ fontSize: 28, color: '#71717a', marginTop: 30 }}>
          React • Next.js • TypeScript
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
