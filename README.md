<div align="center">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<img src="https://i.imgur.com/gITOD4N.png" width="120px" style="margin-bottom: 0px">

# @healform/liquid 

Liquid UI library codifies existing UI components into a central, well-maintained repository. It is built to address having to paste the same components into multiple projects again and again. This simplifies building UI's with HEALFORM's design patterns.

[![CI](https://github.com/HEALFORM/liquid/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/HEALFORM/liquid/actions/workflows/ci.yaml)
[![NPM](https://img.shields.io/npm/v/@healform/liquid.svg)](https://www.npmjs.com/package/@healform/liquid)
[![codecov](https://codecov.io/gh/HEALFORM/liquid/branch/main/graph/badge.svg)](https://codecov.io/gh/HEALFORM/liquid)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://ui-library.healform.de/)

</div>

## Basic Installation

If you're looking to begin developing a user-interface with Liquid, you can install the package directly via [Yarn](https://yarnpkg.com/):

```bash
yarn add @healform/liquid
```

Or if you prefer [NPM](https://npmjs.com):

```bash
npm install --save @healform/liquid
```

## Usage

All components are exported via named exports - we don't have a default export. They can be imported at the top of any React file like such:

```javascript
import { Alert } from '@healform/liquid';
```

They can then be used in JSX like such:

```jsx
const MyGreatComponent = (props) => {
  const alertTitle = 'Aww yeah...';
  const alertStatus = 'success';
  const alertText = 'Nice job using an alert, you did it right!';

  return (
    <Alert title={alertTitle} status={alertStatus}>
      {alertText}
    </Alert>
  );
};
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://dmnktoe.de"><img src="https://avatars.githubusercontent.com/u/34511635?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Domenik Töfflinger</b></sub></a><br /><a href="#infra-dmnktoe" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/HEALFORM/liquid/commits?author=dmnktoe" title="Tests">⚠️</a> <a href="https://github.com/HEALFORM/liquid/commits?author=dmnktoe" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!