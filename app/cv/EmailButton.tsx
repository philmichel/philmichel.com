'use client'

import { Mail } from '@/components/social-icons/icons'

export default function EmailButton() {
  return (
    <button
      onClick={() => {
        window.location.href = `${'mailto'}:${'pmichel'}@${'gmail'}.com`
      }}
      className="text-sm text-gray-500 transition hover:text-gray-600"
    >
      <span className="sr-only">Email</span>
      <Mail className="hover:text-primary-500 dark:hover:text-primary-400 h-7 w-7 fill-current text-gray-700 dark:text-gray-200" />
    </button>
  )
}
