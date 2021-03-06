module.exports = {
    mode: 'jit',
    purge: {
        mode: 'layers',
        layers: ['base', 'components', 'utilities'],
        content: [
            "./components/**/*.{js,vue,ts}",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
            "./plugins/**/*.{js,ts}",
            "./nuxt.config.{js,ts}",
            "./stories/**/*.{js,ts}",
        ],
    },
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'sn-1000': {'max': '1000px'},
            'lg': '1000px',
            'xl': '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                green: {
                    '3': '#288fac',
                },
                red: {
                    '1': '#E4494A',
                    '4': '#E25252',
                    '5': '#EB6767'
                },
                yellow: {
                    '3': '#FFA81D'
                }
            },
            width: {
                '18px': '18px',
                '20px': '20px',
                '40px': '40px',
                '66px': '66px',
                '80px': '80px',
                '100px': '100px',
                '140px': '140px',
                '160px': '160px',
                '200px': '200px',
                '280px': '280px',
                '320px': '320px',
                '400px': '400px',
            },
            height: {
                '6px': '6px',
                '18px':'18px',
                '20px':'20px',
                '40px':'40px',
                '50px':'50px',
                '200px':'200px',
            },
            maxWidth: {
                '320': '320px',
                '450': '450px',
                '1170': '1170px',
                '1200': '1200px',
            },
            spacing: {
                '5%': '5%'
            },
            fontSize: {
                '22px': '22px',
                '32px': '32px'
            },
            margin: {
                '70px': '70px'
            },
            padding: {
                '26px': '26px'
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ]
}