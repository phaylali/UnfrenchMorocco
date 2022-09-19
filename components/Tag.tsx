import kebabCase from '@/lib/utils/kebabCase'
import Link from 'next/link'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="bg-primary-700 active:bg-primary-500 hover:bg-primary-500 duration-300 p-1 px-3 rounded-md text-xs font-semibold uppercase text-white"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
