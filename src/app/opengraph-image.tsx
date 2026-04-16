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
          background: '#000000',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial',
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
              flexDirection: 'column',
              gap: 20,
              padding: 60,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 160,
                fontWeight: 900,
                letterSpacing: -6,
                lineHeight: 1,
                color: '#ffffff',
                textShadow: '0 30px 70px rgba(0,0,0,0.55)',
              }}
            >
              RHM
            </div>

            <div
              style={{
                fontSize: 60,
                fontWeight: 800,
                color: 'rgba(255,255,255,0.92)',
                lineHeight: 1.15,
              }}
            >
              Digital Solutions
            </div>

            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: 'rgba(217,242,166,0.95)',
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
