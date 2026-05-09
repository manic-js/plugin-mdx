import { describe, expect, it } from 'bun:test';
import { mdx } from '../src/index';

describe('@manicjs/mdx', () => {
  it('returns a plugin descriptor with preload hook', () => {
    const plugin = mdx();
    expect(plugin.name).toBe('@manicjs/mdx');
    expect(typeof plugin.preload).toBe('string');
  });
});
