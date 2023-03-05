tailwind.config = {
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            'open-sans': ['Open Sans', 'sans-serif'],
            'poppins': ['Poppins', 'sans-serif'],
            'nunito': ['Nunito', 'sans-serif'],
        },
        borderRadius:{
            'left-t-b': '20px 0px 0px 20px',
            'right-t-b': '0px 20px 20px 0px',
            '50%': '50%',
        },
        screens: {
            'xs': '320px',
            // => @media (min-width: 320px) { ... }

            'sm': '576px',
            // => @media (min-width: 576px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '992px',
            // => @media (min-width: 992px) { ... }
      
            'xl': '1200px',
            // => @media (min-width: 1200px) { ... }
      
            '2xl': '1400px',
            // => @media (min-width: 1400px) { ... }
        },
        extend: {
            colors: {
                'primary-color': '#29313D',
                'secondary-color': '#7968EF',
                'btn-color': '#6A55EA',
                'icon1-color': '#43CB83',
                'icon2-color': '#F36F56',
                'btn-bg1-color': '#323232',
                'btn-bg2-color': '#43CB83',
                'btn-bg3-color': '#845A9F',
                'service-back-1': '#F0EDFF',
                'service-back-2': '#FEF6EC',
                'service-back-3': '#E8FCF2',
                'service-iconbg-1': '#7968EF',
                'service-iconbg-2': '#F8A64C',
                'service-iconbg-2-50%': 'rgba(248, 166, 76, .5)',
                'service-iconbg-3': '#63DE9D',
                'pricing-odd': 'rgba(239, 244, 248, 0.6)',
                'pricing-even': 'rgba(255, 255, 255, 0.7)',
                'transparent': 'transparent',
            },
            backgroundImage: {
                'hero': "url('./images/hero_bacground.png')",
                'analytics': "url('./images/analytics.png')",
            },
            spacing: {
                'minus50%': '-50%',
            },
        }
    }
}