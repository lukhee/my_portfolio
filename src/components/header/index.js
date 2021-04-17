import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile/Lukman">About</Link>
			<Link activeClassName={style.active} href="/skills">Skill</Link>
			<Link activeClassName={style.active} href="/projects">Projects</Link>
			<Link activeClassName={style.active} href="/contact">Contact</Link>
		</nav>
	</header>
);

export default Header;
