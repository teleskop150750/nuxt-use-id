// Inspired from https://github.com/tailwindlabs/headlessui/issues/2913
// as the alternative, and a fallback for Vue version < 3.5

import { useConfigContext } from './config'

let count = 0

/**
 * The `useId` function generates a unique identifier using a provided deterministic ID or a default
 * one prefixed with "radix-", or the provided one via `useId` props from `<ConfigProvider>`.
 * @param {string | null | undefined} [deterministicId] - The `useId` function you provided takes an
 * optional parameter `deterministicId`, which can be a string, null, or undefined. If
 * `deterministicId` is provided, the function will return it. Otherwise, it will generate an id using
 * the `useId` function obtained
 * @returns The `useId` function is being returned. If a `deterministicId` is provided, it will be
 * returned. Otherwise, the `useId` function from the `injectConfigProviderContext` is called to
 * generate an id in the format `radix-` and returned.
 */
export function getId(deterministicId?: string | null | undefined) {
  if (deterministicId)
    return deterministicId

  const { getId } = useConfigContext() || {}
  if (getId && typeof getId === 'function') {
    const id = `nuxt-${getId()}`
    console.error('N', id)
    return id
  }

  return `count-${++count}`
}
