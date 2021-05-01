import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}

	html, body{
		font-family:"Roboto", arial, sans-serif;
		scroll-behavior:smooth;
	}

	body{
		
	}

	::-webkit-scrollbar { width: 8px; height: 3px;}
	::-webkit-scrollbar-button {  background-color: #410B8C; }
	::-webkit-scrollbar-track {  background-color: violet;}
	::-webkit-scrollbar-track-piece { background-color: #000;}
	::-webkit-scrollbar-thumb { height: 50px; background-color: #410B8C;}
	::-webkit-scrollbar-corner { background-color: #646464;}}
	::-webkit-resizer { background-color: #666 }
`

export default GlobalStyle;