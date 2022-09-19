import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'



export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col space-y-6 justify-start py-10 mb-0 space-x-0 text-md text-gray-500 dark:text-gray-400">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0">
          <ul className="flex space-x-2">
            <li>{`© ${new Date().getFullYear()}`}</li>
            <li>{` • `}</li>
            <li>
              <Link href="/" legacyBehavior>
                {siteMetadata.title}
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </footer>
  )
}
