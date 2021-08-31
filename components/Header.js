import { useRouter } from "next/router";
import Image from "next/image";
import { HomeIcon, SearchIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/client";

function Header() {
    const router = useRouter();
    const [session] = useSession();

    return (
        <header className='sticky top-0 z-[1000] bg-[#040714] h-[72px] flex items-center px-10 md:px-12'>
            <Image src="/images/logo.svg" width={80} height={80} alt="disney logo" className='cursor-pointer' onClick={() => router.push('/')}
            />
            {session && (
                <div className='hidden sm:inline-flex ml-10 items-center space-x-5 md:space-x-8'>
                    <a className='header-link group'>
                        <HomeIcon className='h-4' />
                        <span className='span'>home</span>
                    </a>
                    <a className="header-link group hidden lg:inline-flex">
                        <SearchIcon className="h-4" />
                        <span className="span">Search</span>
                    </a>
                    <a className=" hidden lg:inline-flex header-link group">
                        <PlusIcon className="h-4" />
                        <span className="span">Watchlist</span>
                    </a>
                    <a className="header-link group">
                        <StarIcon className="h-4" />
                        <span className="span">Originals</span>
                    </a>
                    <a className="header-link group">
                        <img src="/images/movie-icon.svg" alt="movies" className="h-5" />
                        <span className="span">Movies</span>
                    </a>
                    <a className="header-link group">
                        <img src="/images/series-icon.svg" alt="series" className="h-5" />
                        <span className="span">Series</span>
                    </a>
                </div>
            )}
            {!session ? (
                <button className='ml-auto border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200' onClick={signIn}>LOGIN</button>
            ) : (
                <div className='ml-auto flex flex-col items-center'>
                    <img
                        src={session.user.image}
                        className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer hover:opacity-50"
                        alt={session.user.name}
                        onClick={signOut}
                    />
                    
                </div>
            )}

        </header>
    )
}

export default Header;


