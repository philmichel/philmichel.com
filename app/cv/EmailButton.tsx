'use client'

import { Mail } from '@/components/social-icons/icons'

export default function EmailButton() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        window.location.href = `${'mailto'}:${'pmichel'}@${'gmail'}.com`
      }}
      className="text-sm text-gray-500 transition hover:text-gray-600"
    >
      <span className="sr-only">Email</span>
      <Mail className="h-7 w-7 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400" />
    </a>
  )
}
