import Head from 'next/head'
import Logo from '../components/logo'
import { RiTwitterFill, RiGithubFill, RiRedditFill, RiYoutubeFill, RiDiscordFill } from 'react-icons/ri'

const SocialIcon = (props) => {
    const { link, title, icon } = props
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block text-6xl flex-shrink p-2 border-4 border-solid border-transparent rounded-full transition duration-300 hover:border-purple-lt">
        {icon && icon}
        <span className="sr-only">{title}</span>
      </a>
    )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-purple-dk text-purple-lt">
      <Head>
        <title>zorkcoin | An open-source cryptocurrency by and for Zork Network contributors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>

      </header>

      <main className="flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto py-12 px-6">
        <Logo className="mb-2 h-24 w-24" />
        <h1 className="font-bold text-4xl mb-2">zorkcoin</h1>
        <p className="mb-6">An open-source cryptocurrency by and for Zork Network contributors.</p>
        <div className="flex gap-6 flex-wrap items-center justify-center mb-12">
          <SocialIcon link="https://github.com/Zork-Underground" title="GitHub" icon={<RiGithubFill />} />
          <SocialIcon link="https://x.com/zorkcoin" title="Twitter" icon={<RiTwitterFill />} />
          //<SocialIcon link="https://www.reddit.com/r/zorkcoin/" title="Reddit" icon={<RiRedditFill />} />
          <SocialIcon link="https://discord.gg/pfSYzwBt" title="Discord" icon={<RiDiscordFill />} />
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
