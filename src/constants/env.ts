export const isProd = process.env.NODE_ENV === 'production'
export const isLocal = process.env.NODE_ENV === 'development'

// constants/env.ts
export const openaiApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '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';
export const showLogger = process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' || false;

