import React from 'react'
// import styled from 'styled-components'
import style from './MainComponent.css'

function MainComponent (props) {
	// const Image = styled.div`
	// 	background-image: url(${props.data.Poster});
	// 	width: 100px;
	// 	height: 100%;
	// 	`
return(
	<div id='mainCompDiv'>
		<div className='TextAlignCenter titleContent'>{props.data.Title}</div>
		<div className = 'imagediv TextAlignCenter'>
			<img src={props.data.Poster} alt='movie Poster' className={style.imagetag}></img>	
		</div>
	</div>
)}

export default MainComponent
