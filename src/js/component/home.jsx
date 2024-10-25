import React from "react";
//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
const text1 = "Capturando momentos que cuentan historias invisibles. 📸✨ Cada foto es un viaje en el tiempo."
const text2 = "Un lugar para mentes curiosas y apasionadas por la tecnología. 🌐🚶‍♂️ Donde los geeks encuentran su espacio"
const text3 = "Desarmando y entendiendo el corazón de la tecnología. 🛠️✨ La curiosidad es el motor de cada descubrimiento."
const text4 = "Precisión y detalle en cada tornillo y chip. 🖥️🔍 La ingeniería que impulsa nuestro mundo digital."
const textJumb= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatum, voluptate fuga, blanditiis aspernatur a repudiandae accusantium repellat ab voluptates ipsa explicabo impedit aliquid cum. Cupiditate deleniti ab esse atque!"

//create your first component
const Home = () => {
	return ( 
		<div>
		<Navbar title="Start Bootstrap" anchor="Home" anchor2="About" anchor3="Services" anchor4="Contact" />
		<div className="container p-0" id="Body" >
		<Jumbotron title="A Warm Welcome!" text={textJumb} />
		<div className="row">
		<Card className="card col-4 m-4 p-0" style={{width: '18rem'}} text={text1} title="Card 1" srcImage="https://images.unsplash.com/photo-1729016698490-ea9a76c8d389?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
		<Card className="card col-4 m-4 p-0" style={{width: '18rem'}} text={text2} title="Card 2" srcImage="https://images.unsplash.com/photo-1726925793996-8e478b4f99ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
		<Card className="card col-4 m-4 p-0" style={{width: '18rem'}} text={text3} title="Card 3" srcImage="https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
		<Card className="card col-4 m-4 p-0" style={{width: '18rem'}} text={text4} title="Card 4" srcImage="https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
		</div>
		</div>
		</div>
);
};

export default Home;

