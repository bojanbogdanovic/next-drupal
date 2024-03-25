import type { DrupalClientAuth } from "./client"

export type BaseUrl = string

export type Locale = string

export type PathPrefix = string

export interface FetchOptions extends RequestInit {
  withAuth?: boolean | DrupalClientAuth
}

export type JsonApiOptions = {
  deserialize?: boolean
  json?: boolean
  params?: JsonApiParams
} & JsonApiWithAuthOption &
  (
    | {
        locale: Locale
        defaultLocale: Locale
      }
    | {
        locale?: undefined
        defaultLocale?: never
      }
  )

export type JsonApiWithAuthOption = {
  withAuth?: boolean | DrupalClientAuth
}

export type JsonApiWithCacheOptions = {
  withCache?: boolean
  cacheKey?: string
}

// TODO: Properly type this.
/* eslint-disable  @typescript-eslint/no-explicit-any */
export type JsonApiParams = Record<string, any>
