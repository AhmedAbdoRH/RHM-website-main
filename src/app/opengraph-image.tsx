import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #60b093 0%, #234338 100%)',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 50%), radial-gradient(circle at bottom right, rgba(217,242,166,0.1), transparent 50%)',
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
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: 40,
              background: 'rgba(255,255,255,0.95)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.3)',
              flexDirection: 'column',
              gap: 20,
              padding: 60,
              textAlign: 'center',
            }}
          >
            {/* Logo Circle */}
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #60b093 0%, #234338 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(96,176,147,0.3)',
              }}
            >
              <div
                style={{
                  fontSize: 80,
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: -2,
                  textShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
              >
                RHM
              </div>
            </div>

            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: '#234338',
                lineHeight: 1.15,
              }}
            >
              Digital Solutions
            </div>

            <div
              style={{
                fontSize: 36,
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
