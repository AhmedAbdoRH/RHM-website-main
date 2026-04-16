import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OpengraphImage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rhm-digital.com';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top left, rgba(96,176,147,0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(217,242,166,0.20), transparent 55%)',
          }}
        />

        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 80,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 40,
              background: 'rgba(255,255,255,0.03)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.55)',
            }}
          >
            <img
              src={`${siteUrl}/logo.png`}
              width={520}
              height={520}
              alt="RHM"
              style={{
                objectFit: 'contain',
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.45))',
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
