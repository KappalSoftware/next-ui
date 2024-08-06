# @kappalsoftware/next-ui-system

## Overview

`@kappalsoftware/next-ui-system` is a powerful and flexible design system built on top of Next-UI. It provides a comprehensive set of reusable UI components designed to accelerate the development of modern web applications. With hundreds of pre-built components, this system ensures consistency and efficiency in your projects.

## Features

- **Reusable Components**: A wide range of pre-built UI components like buttons, forms, cards, and more.
- **Customizable**: Easily customize the components using TailwindCSS to match your project's style and requirements.
- **TypeScript Support**: Fully typed with TypeScript for better development experience and error checking.
- **Optimized for Next.js**: Seamlessly integrates with Next.js projects.
- **Multilingual Support**: Built-in support for multiple languages, making your application accessible to a global audience.
- **Easy Localization**: Components support localization and internationalization out-of-the-box.
- **Data Conversion Utilities**: Includes utilities for data formatting and conversion, simplifying data manipulation tasks.

## Installation

To install `@kappalsoftware/next-ui-system`, use npm or yarn:

```bash
npm install @kappalsoftware/next-ui-system
```

or

```bash
yarn add @kappalsoftware/next-ui-system
```

## Usage

Update your next.config.js

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@kappalsoftware/next-ui-system'],
    reactStrictMode: true,
}
module.exports = nextConfig
```


Start using the components in your project by importing them from `@kappalsoftware/next-ui-system`. Here is an example of how to use some of the components:

```typescript
import React from 'react';
import { KappalButton, KappalSelect } from '@kappalsoftware/next-ui-system';

const App = () => (
  <div>
    <KappalButton>Click Me</KappalButton>
    <KappalSelect options={['Option 1', 'Option 2']} />
  </div>
);

export default App;
```

<!-- ### Localization Example

Here’s an example of how to use the localization support:

```typescript
import React from 'react';
import { KappalButton } from '@kappalsoftware/next-ui-system';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <KappalButton>{t('click_me')}</KappalButton>
    </div>
  );
};

export default App;
``` -->

## Available Components

We provide a variety of components to help you build your application quickly and efficiently. Some of the available components include:

- `KappalAccordion`
- `KappalAutoComplete`
- `KappalAvatar`
- `KappalBadge`
- `KappalBreadcrumbs`
- `KappalButton`
- `KappalCard`
- `KappalInput`
- `KappalSelect`
- ...and many more.

For a complete list of components and their usage, please refer to the [documentation](#).

## TypeScript Support

`@kappalsoftware/next-ui-system` includes TypeScript type declarations, providing a better development experience with autocompletion and type checking. The types are automatically generated and included in the package, so you don't need to do anything extra to use them. Make sure you are making necessary changes in your nextjs configuration to handle the typescript code.

## Contributing

We welcome contributions to improve and expand `@kappalsoftware/next-ui-system`. If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request on our [GitHub repository](https://github.com/KappalSoftware/next-ui).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/KappalSoftware/next-ui/blob/main/LICENSE) file for more details.

## Acknowledgements

`@kappalsoftware/next-ui-system` is built on top of the amazing [Next-UI](https://nextui.org/), and we are grateful for the contributions of the Next-UI team and community.
