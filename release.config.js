/* eslint-disable no-template-curly-in-string */
module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'eslint',
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'eslint',
      },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message:
          '${nextRelease.version} CHANGELOG [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  branches: ['master', 'next'],
}
