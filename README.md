<div align="center">

<img src="https://i.imgur.com/gITOD4N.png" width="120px" style="margin-bottom: 0px">

# @healform/liquid 

Liquid UI library codifies existing UI components into a central, well-maintained repository. It is built to address having to paste the same components into multiple projects again and again. This simplifies building UI's with HEALFORM's design patterns.

[![CI](https://github.com/HEALFORM/liquid/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/HEALFORM/liquid/actions/workflows/ci.yaml)
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
