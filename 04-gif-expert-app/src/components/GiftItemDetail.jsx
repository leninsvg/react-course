// eslint-disable-next-line react/prop-types
export const GiftItemDetail = ({title, url}) => {
	return <>
		<div className={'card'}>
			<img src={url} alt={title}/>
			<p>{title}</p>
		</div>
	</>
}
