module.exports = {
  repositoryUrl: 'https://github.com/polpenaloza/react-me.com',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    // [
    //   '@semantic-release/changelog',
    //   {
    //     changelogFile: 'docs/CHANGELOG.md',
    //   },
    // ],
    [
      '@semantic-release/github',
      // { assets: ['docs/CHANGELOG.md'] }
    ],
    // [
    //   '@semantic-release/git',
    //   {
    //     assets: ['docs/CHANGELOG.md'],
    //     message:
    //       'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    //   },
    // ],
  ],
  branches: [{ name: 'testing', prerelease: true }, { name: 'production' }],
}
