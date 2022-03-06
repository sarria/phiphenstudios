import Link from 'next/link'

const Burger = ({navigation}) => {
	
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
						<a>{item.page.title}</a>
					</Link>
				))}
			</div>

		</>
	)
}

export default Burger;

