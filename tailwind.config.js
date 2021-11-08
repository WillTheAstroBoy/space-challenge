module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'barlow': ['Barlow', "sans-serif"],
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      'Bellefair': ['Bellefair', 'serif']
    },
    fontSize: theme => ({
      'xs': ".75rem",
      'sm': ".875rem",
      'tiny': ".875rem",
      'base': "1rem",
      'lg': "1.125rem",
      'xl': "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "10xl": "150px"
    }),
    textColor: theme => ({
      ...theme('colors'),
      'off-pink': "#D0D6F9"
    }),
    extend: {
      backgroundImage: {
        'home_mobile': "url(./assets/home/background-home-mobile.jpg)",
        'home_tablet': "url(./assets/home/background-home-tablet.jpg)",
        'home_desktop': "url(./assets/home/background-home-desktop.jpg)",
        'destination_mobile': "url(./assets/destination/background-destination-mobile.jpg)",
        'destination_tablet': "url(./assets/destination/background-destination-tablet.jpg)",
        'destination_desktop': "url(./assets/destination/background-destination-desktop.jpg)",
        'moon': "url(./assets/destination/image-moon.webp)",
        'europa': "url(./assets/destination/image-europa.webp)",
        'titan': "url(./assets/destination/image-titan.webp)",
        'mars': "url(./assets/destination/image-mars.webp)",
        'crew_mobile': "url(./assets/crew/background-crew-mobile.jpg)",
        'crew_tablet': "url(./assets/crew/background-crew-tablet.jpg)",
        'crew_desktop': "url(./assets/crew/background-crew-desktop.jpg)",
        'technology_mobile': "url(./assets/technology/background-technology-mobile.jpg)",
        'technology_desktop': "url(./assets/technology/background-technology-desktop.jpg)",
        'technology_tablet': "url(./assets/technology/background-technology-tablet.jpg)",
        'launch_vehicle_landscape': "url(./assets/technology/image-launch-vehicle-landscape.jpg)",
        'launch_vehicle_portrait': "url(./assets/technology/image-launch-vehicle-portrait.jpg)",
        'space_capsule_portrait': "url(./assets/technology/image-space-capsule-portrait.jpg)",
        'space_capsule_landscape': "url(./assets/technology/image-space-capsule-landscape.jpg)",
        'spaceport_portrait': "url(./assets/technology/image-spaceport-portrait.jpg)",
        'spaceport_landscape': "url(./assets/technology/image-spaceport-landscape.jpg)"
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'transparent': "rgba(255, 255, 255, 0.04)"
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
