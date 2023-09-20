import { defineConfig, presetIcons, presetWebFonts, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        height: '1.5rem',
        width: '1.5rem',
      },
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter:100,400,500,600,800',
      },
    }),
    presetWind(),
  ],
  preflights: [
    {
      getCSS: () => `
        html,
        body {
          height: 100%;
          font-size: 100%;
        }

        h1, h2, h3, h4, h5 {
          margin: 3rem 0 1.38rem;
          line-height: 1.3;
        }

        h1 {
          margin-top: 0;
          font-size: 3.052rem;
          position: relative;
        }

        h2 {font-size: 2.441rem;}

        h3 {font-size: 1.953rem;}

        h4 {font-size: 1.563rem;}

        h5 {font-size: 1.25rem;}
      `,
    },
  ],
  rules: [
    [
      'mouse-gradient',
      {
        background: `radial-gradient(
          450px at var(--mouse-x) var(--mouse-y),
          hsla(192, 91%, 53%, 0.1),
          transparent 80%
        )`,
      },
    ],
    [
      'main-bg-gradient',
      {
        'background-color': '#26004d',
        'background-image': `radial-gradient(
            at 6% 21%,
            hsla(295, 90%, 55%, 1) 0,
            hsla(295, 90%, 55%, 0) 50%
          ),
          radial-gradient(
            at 36% 1%,
            hsla(192, 91%, 53%, 1) 0,
            hsla(192, 91%, 53%, 0) 50%
          ),
          radial-gradient(
            at 17% 82%,
            hsla(256, 89%, 51%, 1) 0,
            hsla(256, 89%, 51%, 0) 50%
          )`,
      },
    ],
  ],
})
