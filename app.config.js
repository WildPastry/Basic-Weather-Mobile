export default {
  expo: {
    name: 'SimpleWeather',
    slug: 'simple-weather',
    privacy: 'public',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './app/assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './app/assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#313136'
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'nz.co.mikeparker.sw'
    },
    android: {
      permissions: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
      package: 'nz.co.mikeparker.sw',
      adaptiveIcon: {
        foregroundImage: './app/assets/adaptive-icon.png',
        backgroundColor: '#313136'
      }
    },
    description: 'Simple, fast, and intuitive weather.',
    githubUrl: 'https://github.com/WildPastry/SimpleWeather',
    extra: {
      eas: {
        projectId: 'f5567fc0-bbcc-11e9-8d3b-272b0d7f7b9a'
      }
    },
    updates: {
      url: 'https://u.expo.dev/f5567fc0-bbcc-11e9-8d3b-272b0d7f7b9a'
    },
    owner: 'wildpastry',
    runtimeVersion: {
      policy: 'sdkVersion'
    }
  }
};
