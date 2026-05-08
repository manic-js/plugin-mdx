<img src="https://raw.githubusercontent.com/Rahuletto/manic/main/demo/assets/wordmark.svg" alt="Manic" width="300" />

[![npm version](https://img.shields.io/npm/v/%40manicjs%2Fmdx?logo=npm)](https://www.npmjs.com/package/@manicjs/mdx)
[![Bun](https://img.shields.io/badge/runtime-Bun-black?logo=bun)](https://bun.sh)
[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue)](https://opensource.org/licenses/GPL-3.0)

The fastest framework for React.

## Documentation

- Website: [manicjs.tech](https://www.manicjs.tech/)
- Docs: [manicjs.tech/docs](https://www.manicjs.tech/docs)
- Package docs: [https://www.manicjs.tech/docs/framework/plugins/mdx](https://www.manicjs.tech/docs/framework/plugins/mdx)

## Install

```bash
bun add @manicjs/mdx
```

## Usage

```ts
import { defineConfig } from 'manicjs/config';
import { mdx } from '@manicjs/mdx';

export default defineConfig({
  plugins: [mdx()],
});
```

## License

GPL-3.0
