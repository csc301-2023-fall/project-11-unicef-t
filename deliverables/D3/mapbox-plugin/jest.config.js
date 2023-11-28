module.exports = {
  moduleFileExtensions: ['mock.js', 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|png|jpg|geojson)$': '<rootDir>/test/__mocks__/mockExportString.js',
  },
};
