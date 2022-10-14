module.exports = {
  name: 'host-app',
  remotes: ['remote-app'],
  shared: (libraryName, libraryOptions) => {
    if (libraryName === '@angular/localize') {
      return {
        ...libraryOptions,
        eager: true,
      };
    }
  },
};
