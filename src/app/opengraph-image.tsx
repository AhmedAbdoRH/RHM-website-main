import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OpengraphImage() {
  // Fetch the logo from public folder
  const logoResponse = await fetch(
    new URL('/logo2.png', process.env.NEXT_PUBLIC_SITE_URL || 'https://rhm-digital.com')
  );
  const logoBuffer = await logoResponse.arrayBuffer();
  const logoBase64 = Buffer.from(logoBuffer).toString('base64');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top left, rgba(96,176,147,0.15), transparent 55%), radial-gradient(circle at bottom right, rgba(217,242,166,0.10), transparent 55%)',
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
              border: '1px solid rgba(96,176,147,0.20)',
              borderRadius: 40,
              background: 'rgba(255,255,255,0.95)',
              boxShadow: '0 40px 120px rgba(96,176,147,0.25)',
              flexDirection: 'column',
              gap: 30,
              padding: 60,
              textAlign: 'center',
            }}
          >
            {/* Logo Image */}
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: 20,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff',
                boxShadow: '0 20px 60px rgba(96,176,147,0.20)',
              }}
            >
              <img
                src={`data:image/png;base64,${logoBase64}`}
                alt="RHM Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            <div
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#234338',
                lineHeight: 1.15,
              }}
            >
              RHM Digital Solutions
            </div>

            <div
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: '#60b093',
                direction: 'rtl',
                lineHeight: 1.25,
              }}
            >
              نُحوّل الأفكار إلى واقع رقمي
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
