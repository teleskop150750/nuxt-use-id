import { type InjectionKey, inject, provide } from 'vue'

export interface ConfigContext {
  getId?: () => string
}

export const [provideConfigContext, useConfigContext] = createContext<ConfigContext>('Config')

function createContext<T>(
  contextName: string,
): readonly [useProvidingState: (state: T) => void, useContext: (consumerName?: string) => T | undefined] {
  const key: string | InjectionKey<T> = Symbol(contextName)

  const provideContext = (state: T) => {
    provide(key, state)
  }

  const useContext = () => {
    const state = inject(key)

    return state
  }

  return [provideContext, useContext]
}
