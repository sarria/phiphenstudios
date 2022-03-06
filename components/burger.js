import Link from 'next/link'

const Burger = ({navigation}) => {
	
	const handleClick = () => {
		document.getElementById('toggle').checked = false;
	}

	return (
		<>
			<input id="toggle" type="checkbox"></input>

			<label htmlFor="toggle" className="hamburger">
				<div className="topBun"></div>
				<div className="meat"></div>
				<div className="bottomBun"></div>
			</label>

			<div className="nav">
				{navigation.map((item) => (
					<Link key={item.page.slug} href={"/" + item.page.slug}>
						<a onClick={handleClick}>{item.page.title}</a>
					</Link>
				))}
			</div>

		</>
	)
}

export default Burger;

