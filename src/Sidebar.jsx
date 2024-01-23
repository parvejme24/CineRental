import commingSoon from '../src/assets/icons/commingSoon.svg'
import favourite from '../src/assets/icons/favourite.svg'
import newReleaase from '../src/assets/icons/newRelease.svg'
import trending from '../src/assets/icons/trending.svg'
import watchLater from '../src/assets/icons/watchLater.svg'

export default function Sidebar() {
    return (
        <>
            <aside>
                <ul class="space-y-2">
                    <li>
                        <a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                            <img src={trending} width="24" height="24" alt="" />
                            <span>Trending</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={newReleaase} width="24" height="24" alt="" />
                            <span>New Releases</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={commingSoon} width="24" height="24" alt="" />
                            <span>Coming Soon</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={favourite} width="24" height="24" alt="" />
                            <span>Favourites</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={watchLater} width="24" height="24" alt="" />
                            <span>Watch Later</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}