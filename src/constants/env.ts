export const isProd = process.env.NODE_ENV === 'production'
export const isLocal = process.env.NODE_ENV === 'development'

// constants/env.ts
export const openaiApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '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';
export const showLogger = process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' || false;

