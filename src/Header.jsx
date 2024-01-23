import moon from '../src/assets/icons/moon.svg';
import logo from '../src/assets/logo.svg';
import ring from '../src/assets/ring.svg';
import cart from '../src/assets/shopping-cart.svg';

export default function Header() {
    return (
        <>
            <header>
                <nav class="container flex items-center justify-between space-x-10 py-6">
                    <a href="index.html">
                        <img src={logo} width="139" height="26" alt="" />
                    </a>

                    <ul class="flex items-center space-x-5">
                        <li>
                            <a class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={ring} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <a class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={moon} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <a class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={cart} width="24" height="24" alt="" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}